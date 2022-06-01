/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect, useRef, useCallback } from 'react';
import { CreateVehiclesController, ListVehiclesController, UpdateVehicleController } from '../../controllers';
import VehicleModel, { IVehicle } from '../../models/vehicle';

function useLogic() {
    const [vehicles, setVehicle] = useState<Array<IVehicle>>([]);
    const [isAdding, setIsAdding] = useState(true);
    const [isFormShowing, setIsFormShowing] = useState(true);

    const inputId = useRef<HTMLInputElement>(null);
    const inputImage = useRef<HTMLInputElement>(null);
    const inputName = useRef<HTMLInputElement>(null);
    const inputDescription = useRef<HTMLInputElement>(null);
    const inputPrice = useRef<HTMLInputElement>(null);
    const inputYear = useRef<HTMLInputElement>(null);
    const inputKm = useRef<HTMLInputElement>(null);

    const vehicleInputList = {
        description: inputDescription,
        image: inputImage,
        km: inputKm,
        name: inputName,
        price: inputPrice,
        year: inputYear,
        id: inputId,
    };

    const isAddingInputsNotNull = useCallback(
        () =>
            inputDescription.current !== null &&
            inputImage.current !== null &&
            inputKm.current !== null &&
            inputName.current !== null &&
            inputPrice.current !== null &&
            inputYear.current !== null,
        [],
    );

    const isUpdatingInputsNotNull = useCallback(
        () => inputId.current !== null && isAddingInputsNotNull(),
        [isAddingInputsNotNull],
    );

    const populateInputs = useCallback(
        (vehicleModel: IVehicle) => {
            if (isUpdatingInputsNotNull()) {
                setIsAdding(false);
                if (vehicleModel.id !== null) {
                    inputId.current!.value = vehicleModel.id;
                }
                inputDescription.current!.value = vehicleModel.description;
                inputImage.current!.value = vehicleModel.image;
                inputKm.current!.value = vehicleModel.km.toString();
                inputName.current!.value = vehicleModel.name;
                inputPrice.current!.value = vehicleModel.price;
                inputYear.current!.value = vehicleModel.year;
            }
        },
        [isUpdatingInputsNotNull],
    );

    const resetForm = useCallback(() => {
        if (isAddingInputsNotNull()) {
            setIsAdding(true);
            inputDescription.current!.value = '';
            inputImage.current!.value = '';
            inputKm.current!.value = '';
            inputName.current!.value = '';
            inputPrice.current!.value = '';
            inputYear.current!.value = '';
        }
    }, [isAddingInputsNotNull]);

    const handleOnSubmitVehicle = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isAddingInputsNotNull()) {
                const newVehicle = new VehicleModel(
                    null,
                    inputImage.current!.value,
                    inputName.current!.value,
                    inputDescription.current!.value,
                    inputPrice.current!.value,
                    inputYear.current!.value,
                    Number(inputKm.current!.value),
                );

                if (isAdding) {
                    const createVehiclesController = new CreateVehiclesController();
                    createVehiclesController.execute(newVehicle).then(id => {
                        setVehicle(oldVehicle => [...oldVehicle, { ...newVehicle.toJSON(), id }]);
                        resetForm();
                    });
                } else if (inputId.current !== null) {
                    newVehicle.id = inputId.current!.value;

                    const updateVehicleController = new UpdateVehicleController();
                    updateVehicleController.execute(newVehicle).then(() => {
                        setVehicle(oldVehicles =>
                            oldVehicles.map(v => (v.id === newVehicle.id ? { ...newVehicle.toJSON() } : v)),
                        );
                        resetForm();
                    });
                }
            }
        },
        [isAdding, isAddingInputsNotNull, resetForm],
    );

    useEffect(() => {
        const listVehiclesController = new ListVehiclesController();
        listVehiclesController.execute().then(newVehicles => {
            setVehicle(newVehicles);
        });
    }, []);

    const handleOnChangeSwitch = useCallback(() => setIsFormShowing(oldIsFormShowing => !oldIsFormShowing), []);

    return {
        handleOnSubmitVehicle,
        vehicleInputList,
        isAdding,
        vehicles,
        populateInputs,
        setVehicle,
        isFormShowing,
        handleOnChangeSwitch,
    };
}

export default useLogic;
