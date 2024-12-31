"use client";
import Card from "@/app/components/ui/card";
import Input from "@/app/components/ui/input";
import InputUploader from "@/app/components/ui/inputUploader";
import Title from "@/app/components/ui/title";
import { AddProduct } from "@/app/action/product/create";
import Category from "./category";
import { Toaster, toast } from 'sonner';
import { Category as CategoryDB } from "@prisma/client";
import { useActionState, useContext, useState, useTransition } from "react";
import ErrorMessage from "@/app/components/ui/errorMessage";
import SubmitButton from "@/app/components/ui/submitButton";
import Tag from "./tag";
import { useRouter } from "next/navigation";

interface CreateProductProps {
    category: CategoryDB[],
    tag: any
}

const actionState: any = {
    status:""
}

function CreateProduct(props: CreateProductProps) {
    const [data, addproduct, isPending] = useActionState(AddProduct,actionState);
    const [transistion,setTransition] = useTransition();

    console.log(data);

    const handleButton = () => {
        console.log(data)
        setTransition(() => {
            if(data?.status === "error"){
                toast.error("محصول اضافه نشد");
            }else{
                toast.success("محصول اضافه شد");
                location.reload();
                window.scrollTo({top:0})
            }
        })
    }

    return (
        <div className="pb-24">
            <div className="grid grid-cols-[2fr,1fr] gap-4">
                <div>
                    <Card>
                        <Title>
                            افزودن محصول جدید
                        </Title>
                        <form action={addproduct}>
                            <Input type="text" name="product-name" placeholder="نام محصول" id="product-name" label="نام محصول" />
                            <ErrorMessage content={data?.name} />
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Input type="number" name="product-price" placeholder="قیمت محصول" id="product-price" label="قیمت محصول" />
                                    <ErrorMessage content={data?.price} />
                                </div>
                                <div>
                                    <Input type="text" name="product-saleprice" placeholder="قیمت با تخفیف" id="product-saleprice" label="قیمت با تخفیف" />
                                </div>
                            </div>
                            <InputUploader name="product-image" label="عکس محصول" />
                            <ErrorMessage content={data?.image} />
                            <Input type="number" name="product-instock" placeholder="موجودی" id="produc-instock" label="موجودی" />
                            <ErrorMessage content={data?.instock} />
                            <div className="grid grid-cols-2 gap-4">
                                <Category items={props.category} name="product-category" />
                                <Tag items={props.tag} name="product-tag" />
                            </div>
                            <div className="pt-2">
                                <SubmitButton onPress={handleButton}>
                                    افزودن محصول
                                </SubmitButton>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="flex flex-col gap-4">
                </div>
            </div>
        </div>
    )
}

export default CreateProduct;