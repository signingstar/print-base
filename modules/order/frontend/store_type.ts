import { Store } from "redux";

export interface StateObject {
  type: string;
  size: string;
  material: string;
  quantity: string;
}


export interface StoreType {
  store: Store<StateObject>;
}
