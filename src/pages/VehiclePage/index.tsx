import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import Vehicle from '../../componentes/Vehicle';
import FormVehicle from '../../componentes/FormVehicle';
import useLogic from './logic';
import Menu from '../../componentes/Menu';
import { useCounter } from '../../hooks/Counter';

function VehiclePage() {
    const { count } = useCounter();
    const {
        handleOnSubmitVehicle,
        vehicleInputList,
        isAdding,
        vehicles,
        populateInputs,
        setVehicle,
        isFormShowing,
        handleOnChangeSwitch,
    } = useLogic();

    return (
        <>
            <h1>Clicado {count}</h1>
            <br />
            <Menu />
            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0">
                    Mostrar formulário?
                </FormLabel>
                <Switch onChange={handleOnChangeSwitch} id="email-alerts" />
            </FormControl>
            {isFormShowing && (
                <FormVehicle handleOnSubmit={handleOnSubmitVehicle} inputList={vehicleInputList} isAdding={isAdding} />
            )}
            <br />
            {vehicles.map(({ ...vehicle }) => (
                <Vehicle
                    populateInputs={() => populateInputs(vehicle)}
                    setVehicle={setVehicle}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    key={vehicle.id!}
                    {...vehicle}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    id={vehicle.id!}
                />
            ))}
        </>
    );
}

export default VehiclePage;
