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
    inputList: { id, description, image, km, name, price, year },
    isAdding,
}: Props) {
    return (
        <form onSubmit={handleOnSubmit}>
            <input ref={id} type="hidden" id="id" name="id" />
            <label htmlFor="image">
                Imagem
                <input ref={image} id="image" name="image" type="text" placeholder="Insira o link da imagem" />
            </label>
            <br />
            <label htmlFor="name">
                Nome
                <input ref={name} id="name" name="name" type="text" placeholder="Insira o nome" />
            </label>
            <br />
            <label htmlFor="description">
                Descrição
                <input
                    ref={description}
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Insira a descrição"
                />
            </label>
            <br />
            <label htmlFor="price">
                Preço <input ref={price} id="price" name="price" type="text" placeholder="Insira o preço" />
            </label>
            <br />
            <label htmlFor="year">
                Ano <input ref={year} id="year" name="year" type="text" placeholder="Insira o ano" />
            </label>
            <br />
            <label htmlFor="km">
                Km <input ref={km} id="km" name="km" type="number" placeholder="Insira o km" />
            </label>
            <br />
            <br />
            <br />
            <input type="submit" value={isAdding ? 'Criar carro' : 'Alterar carro'} />
        </form>
    );
}

export default FormVehicle;
