"use client";
import { ArrowRight } from "akar-icons";
import Link from "next/link";
import CartItems from "./_components/cart-items";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import PageHeader from "../components/pageHeader";

function page() {
    const { cart } = useContext<any>(CartContext);

    return (
        <div className={`max-w-xl ${cart.length < 8 ? "h-full" : "h-auto"} m-auto pb-28 bg-[var(--background-color)]`}>
            <PageHeader title="سبد خرید" backIcon backHref="/">
            </PageHeader>
            <CartItems />
        </div>
    )
}

export default page;