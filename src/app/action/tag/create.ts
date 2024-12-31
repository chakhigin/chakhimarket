"use server";

import { prisma } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

async function AddTag(prevState: any,formData: FormData){

    const name = formData.get("tag-name") as string;

    const data = await prisma.tag.create({
        data:{
            name,
        }
    })
    revalidatePath("/admin/tag");
    if(data){
        return true;
    }else{
        return "دسته بندی اضافه نشد";
    }
    
}

export default AddTag;