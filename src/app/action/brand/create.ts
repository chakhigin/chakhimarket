"use server";

import { prisma } from "@/app/lib/db";
import { Brand } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function AddBrand(prevState: any,formData: FormData){

    const name = formData.get("brand-name") as string;
    const image = formData.get("brand-image") as string;

    const data: Brand = await prisma.brand.create({
        data:{
            name,
            image
        }
    })
    revalidatePath("/admin/brand");
    if(data){
        return true;
    }else{
        return "برند اضافه نشد";
    }
    
}

export default AddBrand;