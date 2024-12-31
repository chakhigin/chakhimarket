"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";

async function DeleteProduct(formData : FormData){
    const id = formData.get("product-id") as string;

    const data = await prisma.product.delete({
        where:{
            id:parseInt(id)
        }
    })
    revalidatePath("/admin/product")
}

export default DeleteProduct;