"use client";
import { CartContext } from "@/app/context/cartContext";
import { FormatNumber } from "@/app/utils/formatNumber";
import { useContext } from "react";

function Cart(){

    const {cart, cartTotal} = useContext<any>(CartContext);
    return(
        <div className="pt-2">
            <div className="flex items-center justify-between pb-2">
                <div className="text-[13px]">مجموع اقلام سبد خرید ({cart.length})</div>
                <div className="text-[13px]">{FormatNumber(cartTotal())} تومان</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-[13px]">هزینه ارسال</div>
                <div className="text-[13px]">رایگان</div>
            </div>
        </div>
    )
}

export default Cart;