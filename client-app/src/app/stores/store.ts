import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import OrderStore from "./orderStore";
import UserStore from "./userStore";

interface Store {
    orderStore: OrderStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore
}

export const store: Store = {
    orderStore: new OrderStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()
}

export const StoreContext =createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
