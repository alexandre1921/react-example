/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export interface IWrite<T> {
  add(item: T): Promise<string>;
  update(item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
  get(item: T): Promise<T[]>;
}

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  protected abstract readonly _collection: firebase.default.firestore.CollectionReference<firebase.default.firestore.DocumentData>;

  add(item: T): Promise<string> {
    throw new Error('Method not implemented.');
  }

  update(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  get(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
