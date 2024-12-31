"use server";

import { prisma } from "@/app/lib/db";
import { SliderSchema } from "@/app/lib/schema";
import { revalidatePath } from "next/cache";

async function AddSlider(prevState:any,formData : FormData){

    const link = formData.get("slider-link") as string;
    const image = formData.get("slider-image") as string;


    const sliderData = SliderSchema.safeParse({
        link,
        image
    })

    const sliderError = sliderData.error?.flatten().fieldErrors;
    
    if(!sliderData.success){
        return {
            link: sliderError?.link,
            image: sliderError?.image
        }
    }else{
        try{
            const slider = await prisma.slider.create({
                data:{
                    link,
                    image
                }
            })
            revalidatePath("/admin/home-slider");
            return {content:"بنر اضافه شد", status:"success"}
        }catch(error){
            return {content:"بنر اضافه نشد", status:"error"}
        }
    }
}

export default AddSlider;