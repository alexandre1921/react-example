export interface IVehicle {
  id: string | null;
  image: string;
  name: string;
  description: string;
  price: string;
  year: string;
  km: number;
}

class VehicleModel implements IVehicle {
  private _id: string | null;

  private _image: string;

  private _name: string;

  private _description: string;

  private _price: string;

  private _year: string;

  private _km: number;

  constructor(
    id: string | null,
    image: string,
    name: string,
    description: string,
    price: string,
    year: string,
    km: number,
  ) {
    this._id = id;
    this._image = image;
    this._name = name;
    this._description = description;
    this._price = price;
    this._year = year;
    this._km = km;
  }

  public get id(): string | null {
    return this._id;
  }

  public set id(value: string | null) {
    this._id = value;
  }

  public get image(): string {
    return this._image;
  }

  public set image(value: string) {
    this._image = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get price(): string {
    return this._price;
  }

  public set price(value: string) {
    this._price = value;
  }

  public get year(): string {
    return this._year;
  }

  public set year(value: string) {
    this._year = value;
  }

  public get km(): number {
    return this._km;
  }

  public set km(value: number) {
    this._km = value;
  }

  public toJSON() {
    return {
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      price: this.price,
      year: this.year,
      km: this.km,
    };
  }
}

export default VehicleModel;
