import VehicleModel, { IVehicle } from '../../models/vehicle';
import VehicleRepository from '../../repositories/firestore/vehicle';

export type CreateVehicleDTO = Omit<IVehicle, 'id'>;

class CreateVehiclesController {
  public execute({ image, name, description, price, year, km }: CreateVehicleDTO): Promise<string> {
    const vehicleRepository = new VehicleRepository();
    const vehicleModel = new VehicleModel(null, image, name, description, price, year, km);

    return vehicleRepository.add(vehicleModel);
  }
}

export { CreateVehiclesController };
