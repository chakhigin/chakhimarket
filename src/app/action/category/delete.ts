"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";

async function DeleteCategory(formData : FormData){
    const id = formData.get("category-id") as string;

    const data = await prisma.category.delete({
        where:{
            id
        }
    })
    revalidatePath("/admin/category")
}

export default DeleteCategory;