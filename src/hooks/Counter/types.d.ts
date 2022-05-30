import { ICount, IAction } from "./logic";

export interface Props {
  children: React.ReactNode;
}

export interface CounterContextData {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    counterDispatch: React.Dispatch<IAction>;
    counterState: ICount
}

export interface ICount {
  count: number;
}

export interface IAction {
  type: 'increment' | 'decrement';
}
