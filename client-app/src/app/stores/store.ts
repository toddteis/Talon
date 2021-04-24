import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import OrderStore from "./orderStore";

interface Store {
    orderStore: OrderStore;
    commonStore: CommonStore;
}

export const store: Store = {
    orderStore: new OrderStore(),
    commonStore: new CommonStore()
}

export const StoreContext =createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
