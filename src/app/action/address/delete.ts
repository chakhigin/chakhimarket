"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";

async function DeleteAddress(formData : FormData){
    const id = formData.get("address-id") as string;

    const data = await prisma.address.delete({
        where:{
            id
        }
    })
    revalidatePath("/account/address")
}

export default DeleteAddress;