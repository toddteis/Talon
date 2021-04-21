import { createContext, useContext } from "react";
import OrderStore from "./orderStore";

interface Store {
    orderStore: OrderStore
}

export const store: Store = {
    orderStore: new OrderStore()
}

export const StoreContext =createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
