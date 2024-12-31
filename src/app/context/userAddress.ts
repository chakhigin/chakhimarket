import { createContext } from "react";

export const UserAddress = createContext({
    addressId:"",
    setAddressId:(addressId:string) => {}
})