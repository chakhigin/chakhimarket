"use server";

import { prisma } from "@/app/lib/db";
import { ProductSchema } from "@/app/lib/schema";

export async function AddProduct(prevState:any,formData: FormData){
    const name = formData.get("product-name") as string;
    const price = formData.get("product-price") as string;
    const salePrice = formData.get("product-saleprice") as string;
    const inStock = parseInt(formData.get("product-instock") as string);
    const image = formData.get("product-image") as string;
    const categoryId = formData.get("product-category") as string;
    const tagId = formData.get("product-tag") as string;
    const brand = formData.get("product-brand") as any; 

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
    }else{
        try{

            const category = await prisma.category.findFirst({
                where:{
                    id:categoryId
                }
            });

            const product = await prisma.product.create({
                data:{
                    name,
                    price,
                    salePrice,
                    inStock,
                    image,
                    parentCategory:{
                        connect:{
                            id:category?.parentCategoryId || ""
                        }
                    },
                    category:{
                        connect:{
                            id:categoryId
                        },
                    },
                    tag:{
                        connect:{
                            id:tagId
                        }
                    }
                }
            })
            
            return {content: "محصول افزوده شد",status:"success",prevState:"success"}
        }catch(error){
            return {content:"محصول افزوده نشد",status:"error",prevState:"error"}
        }
    }
    
}
