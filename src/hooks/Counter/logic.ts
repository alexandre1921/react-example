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
    const [count, setCount] = useState(() => {
        const oldCount = localStorage.getItem("count");
        if (oldCount !== null) {
            return Number(oldCount);
        }
        localStorage.setItem("count", '0');
        return 0;
    });

    const saveInStorage = (callbackOrNumber: (v: number) => number | number) => {
        if (typeof callbackOrNumber == 'number') {
            const newCount = callbackOrNumber as number;
            localStorage.setItem("count", newCount.toString());
            setCount(callbackOrNumber);
        } else {
            setCount((oldCount) => {
                const newCount = callbackOrNumber(oldCount);
                localStorage.setItem("count", newCount.toString());
                return newCount;
            });
        }
    }

    const [counterState, counterDispatch] = useReducer(reducer, initialState);

    return {
        count,
        setCount: saveInStorage,
        counterState,
        counterDispatch,
    }
}

export default useLogic;