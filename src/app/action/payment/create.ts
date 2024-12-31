"use server";

import { prisma } from "@/app/lib/db";
import { Product } from "@prisma/client";

async function CreatePayment(prevState:any,formData : FormData){

    const id = formData.get("user-id") as string;
    const product : any = JSON.parse(formData.get("products") as string);
    const address = formData.get("user-address") as string;
    const paymentType = formData.get("payment-type") as string;
    const orderStatus = formData.get("order-status") as string;

    const productIds: any = [];
    const ids : any = [2,3];

    product.map((item:any) => {
        productIds.push({id:item.id});
        ids.push(item.id);
    })

    try{
        const order = await prisma.order.create({
            data:{
                userId:id,
                products:{
                    connect:productIds
                },
                itemsordered:{product},
                paymentType:paymentType,
                addressId:address,
                orderstatus:orderStatus
            },
            include:{
                products:true
            }
        })
        const productOrdred = await prisma.product.updateMany({
            where:{
                id:{
                    in:ids
                }
            },
            data:{
                orderCounts:{
                    increment: 1
                },
                inStock:{
                    increment: -1
                }
            }
        })

        return {content:"سفارش ثبت شد",status:"seccess"}

    }catch(error){
        return {content:"سفارش ثبت نشد",status:"error"}
    }
}

export default CreatePayment;