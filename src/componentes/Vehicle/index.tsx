import { useCallback } from 'react';
import { DestroyVehicleController } from '../../controllers';
import { IVehicle } from '../../models/vehicle';
import { Container, Title, Button } from './styles';

export interface Props extends IVehicle {
    id: string;
    setVehicle: React.Dispatch<React.SetStateAction<IVehicle[]>>;
    populateInputs: () => void;
    children: React.ReactNode;
}

function Vehicle(props: Props) {
    const handleOnClickVehicle = useCallback(() => {
        const destroyVehicleController = new DestroyVehicleController;

        destroyVehicleController.execute({ id: props.id }).then(() => {
            props.setVehicle(oldVehicles => 
                [...oldVehicles]
                    .filter(v => v.id !== props.id));
        });
    }, []);

    return (
        <Container>
            <img src={props.image} alt="vehicle image" />
            <Title fontSize={20} underline>{props.name}</Title>
            <p>{props.description}</p>
            <h2>{props.price}</h2>
            <div className='flex'>
                <p>{props.year}</p>
                <p>{props.km} km</p>
            </div>
            <div className='flex'>
                <Button className='danger' onClick={handleOnClickVehicle}>Deletar</Button>
                <Button className='primary' onClick={props.populateInputs}>Alterar</Button>
            </div>
        </Container>
    );
}

export default Vehicle;