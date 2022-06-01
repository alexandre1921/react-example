import { IVehicle } from '../../models/vehicle';
import VehicleRepository from '../../repositories/firestore/vehicle';

class ListVehiclesController {
    public async execute(): Promise<Array<IVehicle>> {
        const vehicleRepository = new VehicleRepository();

        const vehicles = await vehicleRepository.findAll();
        const usersToJSON = vehicles.map(vehicle => vehicle.toJSON());

        return usersToJSON;
    }
}

export { ListVehiclesController };
