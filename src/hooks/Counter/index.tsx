import { useMemo, createContext, useContext } from 'react';

import useLogic from './logic';
import { Props, CounterContextData } from './types';

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

function CounterProvider({ children }: Props) {
    const { count, setCount, counterDispatch, counterState } = useLogic();

    const contextValue = useMemo(
        () => ({
            count,
            setCount,
            counterDispatch,
            counterState,
        }),
        [count, counterDispatch, counterState, setCount],
    );

    return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>;
}

function useCounter() {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error('useCounter must be used within an CounterProvider');
    }

    return context;
}

export { CounterProvider, useCounter };
