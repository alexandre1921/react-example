import VehicleModel from '../../models/vehicle';
import { db } from '../../utils/firebase';
import { BaseRepository } from '../base-repository';

class VehicleRepository extends BaseRepository<VehicleModel> {
  protected readonly _collection;

  constructor() {
    super();
    this._collection = db.collection('vehicles');
  }

  public async add(vehicleModel: VehicleModel): Promise<string> {
    const newVehicleDoc = this._collection.doc();

    vehicleModel.id = newVehicleDoc.id;

    try {
      await newVehicleDoc.set(vehicleModel.toJSON());

      return vehicleModel.id;
    } catch (err: any) {
      throw new Error('Não foi possível adicionar um veículo');
    }
  }

  public async update(item: VehicleModel): Promise<boolean> {
    try {
      await this._collection.doc(item.id!).update(item.toJSON());

      return true;
    } catch (err: any) {
      throw new Error('Não foi possível atualizar o veículo');
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      await this._collection.doc(id).delete();

      return true;
    } catch (err: any) {
      throw new Error('Não foi possível deletar o veículo');
    }
  }

  public async findAll(): Promise<VehicleModel[]> {
    try {
      const getVehicles = this._collection.get();

      const vehiclesModels = await getVehicles.then(collection => {
        const docsToJSON = collection.docs.map(vehicle => {
          const vehicleData = vehicle.data();

          return new VehicleModel(
            vehicleData.id,
            vehicleData.image,
            vehicleData.name,
            vehicleData.description,
            vehicleData.price,
            vehicleData.year,
            vehicleData.km,
          );
        });

        return docsToJSON;
      });

      return vehiclesModels;
    } catch (err: any) {
      throw new Error('Não foi possível buscar os veículos');
    }
  }
}

export default VehicleRepository;
