import { createContext, useContext } from 'react';

import useLogic from './logic';
import { Props, CounterContextData } from './types';

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

const CounterProvider: React.FC<Props> = ({ children }: Props) => {
  const {
    count,
    setCount,
    counterDispatch,
    counterState,
  } = useLogic();

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
        counterDispatch,
        counterState
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter must be used within an CounterProvider');
  }

  return context;
}

export { CounterProvider, useCounter };
