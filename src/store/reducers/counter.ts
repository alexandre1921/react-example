import { COUNTER_ADD, COUNTER_SUB } from '../contants';
import { Store, Action } from '../types';
import initialState from '../initialState';

import { ICount } from '../../hooks/Counter/types';

type CounterType = Store['counter'];

type ActionsType = { [k: string]: (...args: any[]) => CounterType };

const actions: ActionsType = {
    [COUNTER_ADD]: (state: CounterType, { count }: ICount = { count: 0 }): CounterType => {
        return {
            ...state,
            count: state.count + count + 1,
        };
    },
    [COUNTER_SUB]: (state: CounterType, { count = 0 }: ICount = { count: 0 }): CounterType => {
        return {
            ...state,
            count: state.count - count - 1,
        };
    },
};

const appReducer = (state: CounterType = initialState.counter, action: Action<keyof typeof actions>): CounterType => {
    return actions[action.type] ? actions[action.type](state, action.payload) : state;
};

export default appReducer;
