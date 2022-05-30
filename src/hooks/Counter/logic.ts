import { useReducer, useState } from "react";
import { IAction, ICount } from "./types";

const initialState = { count: 0 };

function reducer(state: ICount, action: IAction) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        default:
        throw new Error();
    }
}

function useLogic() {
    const [count, setCount] = useState(0);

    const [counterState, counterDispatch] = useReducer(reducer, initialState);

    return {
        count,
        setCount,
        counterState,
        counterDispatch,
    }
}

export default useLogic;