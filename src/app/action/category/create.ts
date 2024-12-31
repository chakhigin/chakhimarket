"use server";

import { prisma } from "@/app/lib/db";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function AddCategory(prevState: any,formData: FormData){

    const name = formData.get("category-name") as string;
    const categoryId = formData.get("category-parent") as string;

    const data: Category = await prisma.category.create({
        data:{
            name,
            parentCategory:{
                connect:{
                    id:categoryId
                }
            }
        }
    })
    revalidatePath("/admin/category");
    if(data){
        return true;
    }else{
        return "دسته بندی اضافه نشد";
    }
    
}

export default AddCategory;