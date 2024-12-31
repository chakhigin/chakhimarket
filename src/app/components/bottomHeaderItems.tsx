"use client";
import { Basket, HomeAlt1, Person, ShippingBoxV1 } from "akar-icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import UserLoggedIn from "../lib/user-logged";
import { usePathname } from "next/navigation";

function BottomHeaderItems() {


    const pathname = usePathname();
    const {cart} = useContext<any>(CartContext);
    const {user,isUser} = UserLoggedIn();

    const [cartItems,setCartItems] = useState<any>(cart.length);

    useEffect(() => {
        setCartItems(cart);
    },[cart])

    return (
        <div className="flex items-center justify-between w-full">
            <div>
                <Link href="/" className={`flex items-center justify-center flex-col text-[11px] ${pathname === "/" ? "text-[#000]" : "text-[#868686]"}`}>
                    <HomeAlt1 width={19} height={19} color={`${pathname === "/" ? "#000" : "#868686"}`}/>
                    خانه
                </Link>
            </div>
            <div>
                <Link href="/cart" className={`flex items-center justify-center flex-col relative text-[11px] ${pathname === "/cart" ? "text-[#000]" : "text-[#868686]"}`}>
                    {cartItems?.length > 0 ? <div className="flex items-center justify-center absolute -top-1 left-0 bg-[#99BC85] rounded-full w-[18px] h-[18px] text-[#000]"><span className="font-bold">{cart.length}</span></div> : <div></div>}
                    <Basket width={19} height={19} color={`${pathname === "/cart" ? "#000" : "#868686"}`}/>
                    سبد خرید
                </Link>
            </div>
            <div>
                <Link href="/orders" className={`flex items-center justify-center flex-col text-[11px] ${pathname === "/orders" ? "text-[#000]" : "text-[#868686]"}`}>
                    <ShippingBoxV1 width={20} height={20} color={`${pathname === "/orders" ? "#000" : "#868686"}`}/>
                    سفارشات
                </Link>
            </div>
            <div>
                <Link href={isUser ? "/account" : "/login"} className={`flex items-center justify-center flex-col text-[11px] ${pathname.includes("/account") ? "text-[#000]" : "text-[#868686]"}`}>
                    <Person width={19} height={19} color={`${pathname.includes("account") ? "#000" : "#868686"}`}/>
                    حساب کاربری
                </Link>
            </div>
        </div>
    )
}

export default BottomHeaderItems;