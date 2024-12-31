"use server";

import { prisma } from "@/app/lib/db";
import { Order } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function UpdateOrder(prevState:any,formData: FormData){
    const id = formData.get("order-id") as string;
    const orderStatus = formData.get("order-status") as string;

    try{
        const order: Order = await prisma.order.update({
            where:{
                id
            },
            data:{
                orderstatus:orderStatus
            }
        })
        revalidatePath("/admin/order");
        return {content:"سفارش ویرایش شد", status:"success"}

    }catch(error){
        return {content:"سفارش ویرایش نشد", status:"error"}
    }

}