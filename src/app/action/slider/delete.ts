"use server";

import { prisma } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

async function DeleteSlider(formData : FormData){

    const id = formData.get("slider-id") as string;

    const data = await prisma.slider.delete({
        where:{
            id
        }
    })
    revalidatePath("/admin/home-slider")

}

export default DeleteSlider;