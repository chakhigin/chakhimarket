"use server";

import { prisma } from "@/app/lib/db";
import { ProductSchema } from "@/app/lib/schema";
import { Category, Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function UpdateProduct(prevState:any,formData: FormData){
    const id = formData.get("product-id") as string;
    const name = formData.get("product-name") as string;
    const price = formData.get("product-price") as string;
    const salePrice = formData.get("product-saleprice") as string;
    const inStock = parseInt(formData.get("product-instock") as string);
    const categoryId = formData.get("product-category") as string;
    const tagId = formData.get("product-tag") as string;
    const image = formData.get("product-image") as string;

    console.log(image);

    const productData = ProductSchema.safeParse({
        name,
        price,
        inStock,
        image
    })

    const productError = productData.error?.flatten().fieldErrors;

    if(!productData.success){
        return {
            name:productError?.name,
            price:productError?.price,
            instock:productError?.inStock,
            image:productError?.image
        }
    }
    
    try{

        const category = await prisma.category.findFirst({
            where:{
                id:categoryId
            }
        })

        const product : Product = await prisma.product.update({
            where:{
                id:parseInt(id)
            },
            data:{
                name,
                price,
                salePrice,
                inStock,
                parentCategoryId:category?.parentCategoryId,
                categoryId,
                tagId,
                image
            }
        })
        revalidatePath("/admin/product");
        return {content:"محصول ویرایش شد", status:"success"}

    }catch(error){
        return {content:"محصول ویرایش نشد", status:"error"}
    }

}