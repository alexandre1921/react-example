import { useDispatch, useSelector } from 'react-redux';
import Menu from '../../componentes/Menu';
import { useCounter } from '../../hooks/Counter';
import { COUNTER_ADD, COUNTER_SUB } from '../../store/contants';
import { Store } from '../../store/types';
import { Container, Info, Button } from './styles';

function StyledComponentsExample() {
    const { counterDispatch, counterState } = useCounter();
    const dispatch = useDispatch();
    const countStore = useSelector((state: Store) => state.counter);

    return (
        <>
            <h1>Exemplo usando Styled Components</h1>
            <h1>Vezes clicado {counterState.count}</h1>
            <Button className="primary" onClick={() => counterDispatch({ type: 'increment' })}>
                Clique para somar 1 no contador do reducer
            </Button>
            <br />
            <br />
            <Button className="danger" onClick={() => counterDispatch({ type: 'decrement' })}>
                Clique para subtrair 1 no contador do redux
            </Button>
            <br />
            <h1>Vezes clicado {countStore.count}</h1>
            <Button className="primary" onClick={() => dispatch({ type: COUNTER_ADD })}>
                Clique para somar 1 no contador do redux
            </Button>
            <br />
            <br />
            <Button className="danger" onClick={() => dispatch({ type: COUNTER_SUB })}>
                Clique para subtrair 1 no contador do reducer
            </Button>
            <br />
            <Menu />
            <Container>
                <img src="https://http2.mlstatic.com/D_Q_NP_920969-MLA48642250185_122021-AB.webp" alt="notebook" />
                <hr />
                <div>
                    <h3>R$ 4.899</h3>
                    <Info>12x R$408 sem juros</Info>
                    <Info bold>Frete grátis</Info>
                </div>
            </Container>
        </>
    );
}

export default StyledComponentsExample;
