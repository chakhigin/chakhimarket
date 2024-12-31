import { createContext } from "react";


export const ModalContext = createContext({
    openModal:false,
    setOpenModal:(openModal:any) => {}
});