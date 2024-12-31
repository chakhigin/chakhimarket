"use server";

import { prisma } from "@/app/lib/db";
import { Category, ParentCategory } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function AddParentCategory(prevState: any,formData: FormData){

    const name = formData.get("category-name") as string;
    const image = formData.get("category-image") as string;

    const data: ParentCategory = await prisma.parentCategory.create({
        data:{
            name,
            image
        }
    })
    revalidatePath("/admin/category");
    if(data){
        return true;
    }else{
        return "دسته بندی اضافه نشد";
    }
    
}

export default AddParentCategory;