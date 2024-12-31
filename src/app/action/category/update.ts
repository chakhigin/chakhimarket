"use server";

import { prisma } from "@/app/lib/db";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function UpdateCategory(prevState:any,formData: FormData){
    const id = formData.get("category-id") as string;
    const parentCategoryId = formData.get("category-parent") as string;
    const name = formData.get("category-name") as string;
    
    const category : Category = await prisma.category.update({
        where:{
            id
        },
        data:{
            name,
            parentCategoryId
        }
    })

    revalidatePath("/admin/category");

    if(category){
        return true;
    }else{
        return "محصول بروزرسانی نشد";
    }
}