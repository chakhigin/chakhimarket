"use server";

import { prisma } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function UpdateTag(prevState:any,formData: FormData){
    const id = formData.get("tag-id") as string;
    const name = formData.get("tag-name") as string;
    
    const tag = await prisma.tag.update({
        where:{
            id
        },
        data:{
            name,
            isTag:true
        }
    })

    revalidatePath("/admin/tag");

    if(tag){
        return true;
    }else{
        return "محصول بروزرسانی نشد";
    }
}