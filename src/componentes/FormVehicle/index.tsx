import './index.css';

export interface VehicleInputList {
  description: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  km: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  year: React.RefObject<HTMLInputElement>;
  id: React.RefObject<HTMLInputElement>;
}

interface Props {
  handleOnSubmit(e: React.FormEvent<HTMLFormElement>): void;
  inputList: VehicleInputList;
  isAdding: boolean;
}

function FormVehicle({ 
    handleOnSubmit,
    inputList: { 
      id,
      description,
      image,
      km,
      name,
      price,
      year
    },
    isAdding
  }: Props) {
  return (
    <form onSubmit={handleOnSubmit}>
      <input ref={id} type="hidden" id="id" name="id" />
      <label htmlFor="image">Imagem</label>
      <br />
      <input ref={image} id="image" name="image" type="text" placeholder='Insira o link da imagem'/>
      <label htmlFor="name">Nome</label>
      <br />
      <input ref={name} id="name" name="name" type="text" placeholder='Insira o nome'/>
      <label htmlFor="description">Descrição</label>
      <br />
      <input ref={description} id="description" name="description" type="text" placeholder='Insira a descrição'/>
      <label htmlFor="price">Preço</label>
      <br />
      <input ref={price} id="price" name="price" type="text" placeholder='Insira o preço'/>
      <label htmlFor="year">Ano</label>
      <br />
      <input ref={year} id="year" name="year" type="text" placeholder='Insira o ano'/>
      <label htmlFor="km">Km</label>
      <br />
      <input ref={km} id="km" name="km" type="number" placeholder='Insira o km'/>
      <br />
      <br />
      <input type="submit" value={isAdding ? "Criar carro" : "Alterar carro"} />
    </form>
  )
}

export default FormVehicle
