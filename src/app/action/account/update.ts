"use server";

import { prisma } from "@/app/lib/db";
import { AccountSchema } from "@/app/lib/schema";
import { revalidatePath } from "next/cache";

export async function UpdateAccount(prevState:any,formData: FormData){
    const id = formData.get("user-id") as string;
    const name = formData.get("user-name") as string;
    const email = formData.get("user-email") as string;
    const phone = formData.get("user-phone") as string;

    const productData = AccountSchema.safeParse({
        name,
        email,
        phone
    })

    const productError = productData.error?.flatten().fieldErrors;

    if(!productData.success){
        return {
            name:productError?.name,
            email:productError?.email,
            phone:productError?.phone
        }
    }
    
    try{
        const user = await prisma.user.update({
            where:{
                id
            },
            data:{
                name,
                email,
                phone
            }
        })
        revalidatePath("/account/settings");
        return {content:"حساب کاربری به روز شد", status:"success"}

    }catch(error){
        return {content:"حساب کاربری بروز نشد", status:error}
    }

}
