"use client";

import { useEffect, useState } from "react";
import { ModalContext } from "./modalContext";
import { CartContext } from "./cartContext";
import { Category } from "@prisma/client";
import { UserContext } from "./userContext";
import { UserAddress } from "./userAddress";

interface ContextProviderProps {
    children: React.ReactNode
}

export type CartProps = {
    id: string,
    name: string,
    price: number,
    image: string,
    category: Category[],
    qty: number
}

function ContextProvider(props: ContextProviderProps) {
    const localStorageCart = typeof window !== "undefined" && window.localStorage ? localStorage.getItem("cart") as any : [];
    const [openModal, setOpenModal] = useState(false);
    const [cart, setCart] = useState<any>(typeof window !== "undefined" && window.localStorage ? localStorage.getItem("cart") ? JSON.parse(localStorageCart) : [] : []);
    const [user, setUser] = useState(null);
    const [isUser, setIsUser] = useState(false);
    const [addressId, setAddressId] = useState("");


    const addItemsToCart = (cartItem: CartProps) => {
        const itemExistInCart = cart.find((item:any) => item.id === cartItem.id);
        if (itemExistInCart) {
            setCart(cart.map((item: any) =>
                item.id === cartItem.id ? { ...item, qty: item.qty + 1 } : item
            ))
        } else {
            setCart([...cart, { ...cartItem, qty: 1 }])
        }
    }

    const minusItemFromCart = (id: any) => {
        const item: any = cart.find((item:any) => item.id === id);
        if (item.qty === 1) {
            return;
        } else {
            setCart(cart.map((item:any) => item.id === id ? { ...item, qty: item.qty - 1 } : item))
        }
    }

    const removeItemFromCart = (id: any) => {
        const items: any = cart.filter((item:any) => item.id !== id);
        console.log(items);
        setCart(items)
    }

    const cartTotal = () => {
        const totalPrice = cart.reduce((total:any, item:any) => total + item.qty * item.price, 0);
        return totalPrice;
    }

    const removeCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    useEffect(() => {
        const cartItems: any = localStorage.getItem("cart")
        if (cartItems !== undefined) {
            setCart(JSON.parse(cartItems));
        }
    }, [])

    return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            <CartContext.Provider value={{ cart, setCart, addItemsToCart, removeItemFromCart, minusItemFromCart, cartTotal, removeCart }}>
                <UserContext.Provider value={{ isUser, setIsUser, user, setUser }}>
                    <UserAddress.Provider value={{ addressId, setAddressId }}>
                        {props.children}
                    </UserAddress.Provider>
                </UserContext.Provider>
            </CartContext.Provider>
        </ModalContext.Provider>
    )
}

export default ContextProvider;