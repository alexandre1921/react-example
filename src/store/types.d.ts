import { ICount } from '../hooks/Counter/types'

export interface Store {
    counter: ICount;
}
  
export type Action<T, U = string> = {
    type: keyof T;
    payload: U;
}