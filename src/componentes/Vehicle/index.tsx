import { useCallback } from 'react';
import { DestroyVehicleController } from '../../controllers';
import { IVehicle } from '../../models/vehicle';
import { Container, Title, Button } from './styles';

export interface Props extends IVehicle {
    id: string;
    setVehicle: React.Dispatch<React.SetStateAction<IVehicle[]>>;
    populateInputs: () => void;
}

function Vehicle({ id, image, name, description, price, year, km, populateInputs, setVehicle }: Props) {
    const handleOnClickVehicle = useCallback(() => {
        const destroyVehicleController = new DestroyVehicleController();

        destroyVehicleController.execute({ id }).then(() => {
            setVehicle(oldVehicles => [...oldVehicles].filter(v => v.id !== id));
        });
    }, [id, setVehicle]);

    return (
        <Container>
            <img src={image} alt="vehicle" />
            <Title fontSize={20} underline>
                {name}
            </Title>
            <p>{description}</p>
            <h2>{price}</h2>
            <div className="flex">
                <p>{year}</p>
                <p>{km} km</p>
            </div>
            <div className="flex">
                <Button className="danger" onClick={handleOnClickVehicle}>
                    Deletar
                </Button>
                <Button className="primary" onClick={populateInputs}>
                    Alterar
                </Button>
            </div>
        </Container>
    );
}

export default Vehicle;
