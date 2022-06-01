import VehicleRepository from '../../repositories/firestore/vehicle';

export interface DestroyVehicleDTO {
    id: string;
}

class DestroyVehicleController {
    public execute({ id }: DestroyVehicleDTO): Promise<boolean> {
        const vehicleRepository = new VehicleRepository();

        return vehicleRepository.delete(id);
    }
}

export { DestroyVehicleController };
