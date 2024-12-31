"use server";

import { prisma } from "@/app/lib/db";
import { SliderSchema } from "@/app/lib/schema";
import { Slider } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function UpdateSlider(prevState:any,formData : FormData){
    

    const id = formData.get("slider-id") as string;
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
            const slider : Slider = await prisma.slider.update({
                where:{
                    id
                },
                data:{
                    link,
                    image
                }
            })
            revalidatePath("/admin/home-slider");
            return {content:"محصول ویرایش شد", status:"success"}
    
        }catch(error){
            return {content:"محصول ویرایش نشد", status:"error"}
        }
    }

}

export default UpdateSlider;