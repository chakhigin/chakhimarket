"use client";
import Button from "@/app/components/ui/button";
import CartList from "./cart-list";
import { CartContext } from "@/app/context/cartContext";
import { useContext, useEffect, useState } from "react";
import { FormatNumber } from "@/app/utils/formatNumber";
import BottomHeader from "@/app/components/bottomHeader";
import { Auth } from "@/app/lib/auth-user";
import { User } from "better-auth";
import { useRouter } from "next/navigation";

interface CartItemsProps {
    ids?: number[]
}

function CartItems(props: CartItemsProps) {

    const router = useRouter();

    const { cart, cartTotal } = useContext<any>(CartContext);
    cartTotal();

    const [user,setUser] = useState(null);

    const isUser = async () => {
        const user: any = await Auth();
        setUser(user);
    }

    useEffect(() => {
        isUser();
    },[])

    if (cart.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-full">
                <div className="flex items-center justify-center min-h-full">
                    سبد خرید شما خالی هست
                </div>
                <BottomHeader />
            </div>
        )
    }

    return (
        <div className="pt-8 overflow-auto">
            <CartList cartItems={cart} />
            <div className="fixed bottom-0 w-full max-w-[576px] px-8 py-4 translate-x-0 bg-[#fff] border-t border-t-[var(--border-color)]">
                {cartTotal() <= 200000 && <div className="text-[12px] pb-3">حداقل مبلغ خرید 200,000 تومان است, مبلغ باقی مانده {FormatNumber(200000 - cartTotal())} تومان</div>}
                <div>
                    مجموع خرید: {FormatNumber(cartTotal())} تومان
                </div>
                <div>
                    <Button full onPress={() => user ? router.push("/payment") : router.push("/login")} disable={cartTotal() <= 200000}>
                        پرداخت
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItems;