"use server";
import { prisma } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

async function AddAddress(prevState:any,formData : FormData){
    const id = formData.get("user-id") as string;
    const address = formData.get("user-address") as string;
    const housenumber = parseInt(formData.get("user-housenumber") as string);
    const ring = parseInt(formData.get("user-ring") as string);

    console.log(id)
    console.log(address)

    try{
        const userAddress = await prisma.address.create({
            data:{
                userId:id,
                address,
                housenumber,
                ring
            }
        })
        revalidatePath("/account/address");
        return {content:"آدرس افزوده شد", status:"success"}
    }catch(error){
        return {content:"آدرس افزوده نشد", status:"error"}
    }

}

export default AddAddress;