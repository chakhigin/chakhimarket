"use server";

import { prisma } from "@/app/lib/db";
import { ParentCategory } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function UpdateParentCategory(prevState:any,formData: FormData){
    const id = formData.get("category-id") as string;
    const name = formData.get("category-name") as string;
    const image = formData.get("category-image") as string;
    
    const category = await prisma.parentCategory.update({
        where:{
            id
        },
        data:{
            name,
            image
        }
    })

    revalidatePath("/admin/category");

    if(category){
        return true;
    }else{
        return "محصول بروزرسانی نشد";
    }
}