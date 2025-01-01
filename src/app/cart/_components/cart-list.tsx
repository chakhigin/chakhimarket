"use client";
import Button from "@/app/components/ui/button";
import { CartContext } from "@/app/context/cartContext";
import { CartProps } from "@/app/context/contextProvider";
import { FormatNumber } from "@/app/utils/formatNumber";
import { Minus, Plus, TrashBin } from "akar-icons";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "sonner";

interface CartListProps{
    cartItems:CartProps[]
}

function CartList(props:CartListProps){

    const {addItemsToCart,removeItemFromCart,minusItemFromCart} = useContext<any>(CartContext);

    const removeItemCart = (id:string,name:string) => {
        removeItemFromCart(id);
        toast.success(`${name} از سبد خرید شما حذف شد`);
    }

    return(
        <div>
            <div className="px-8">
                {props.cartItems.map((item,index) => (
                    <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-b-[var(--border-color)]" key={index}>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] h-[50px]">
                                <Image src={`/images/${item.image}`} alt={item.name} width={50} height={50} className="rounded-full border border-[var(--border-color)]" />
                            </div>
                            <div className="flex flex-col">
                                <div><span className="text-[12px]">{item.name}</span></div>
                                <div><span className="text-[12px]">قیمت: </span><span className="text-[12px]">{FormatNumber(item.price)} تومان</span></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-[18px] h-[18px] bg-[#fff] rounded-md border border-[var(border-color)] shadow-xl" onClick={() => minusItemFromCart(item.id)}><Minus width={12} height={12}/></div>
                                <div className="text-[12px] pt-1">{item.qty}</div>
                                <div className="flex items-center justify-center w-[18px] h-[18px] bg-[#fff] rounded-md border border-[var(border-color)] shadow-xl" onClick={() => addItemsToCart(item)}><Plus width={12} height={12}/></div>
                            </div>
                            <div className="flex items-center gap-2 pt-3 text-red-500" onClick={() => removeItemCart(item.id,item.name)}>
                                <TrashBin width={12} height={12}/>
                                <span className="text-[11px] text-red-500">حذف</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartList;