"use client";

import { UpdateProduct } from '@/app/action/product/update';
import Input from '@/app/components/ui/input';
import { ModalContext } from '@/app/context/modalContext';
import { useActionState, useCallback, useContext, useState } from 'react';
import { Category as CategoryDB, Product, Tag as TagDB } from '@prisma/client';
import InputUploader from '@/app/components/ui/inputUploader';
import { toast } from 'sonner';
import SubmitButton from '@/app/components/ui/submitButton';
import ErrorMessage from '@/app/components/ui/errorMessage';
import Category from './category';
import Tag from './tag';

interface EditProductProps {
    product: any,
    category: CategoryDB[],
    tag: TagDB[]
}

function EditProduct(props: EditProductProps) {
    const { setOpenModal } = useContext(ModalContext);
    const [status, setStatus] = useState();
    const [productName, setProductName] = useState(props.product.name);
    const [productPrice, setProductPrice] = useState(props.product.price);
    const [productSalePrice, setProductSalePrice] = useState(props.product.salePrice);
    const [productInStock, setProductInStock] = useState(props.product.inStock);

    const handleChangeName = (e: any) => {
        setProductName(e.target.value);
    }

    const handleChangePrice = (e: any) => {
        setProductPrice(e.target.value);
    }

    const handleChangeSalePrice = (e: any) => {
        setProductSalePrice(e.target.value);
    }

    const handleInStockChange = (e: any) => {
        setProductInStock(e.target.value);
    }

    const [data, updateProduct, isPendding] = useActionState(UpdateProduct, null);

    const handleButton = useCallback(() => {
        if (data?.status === "error") {
            toast.error("محصول ویرایش نشد");
        }
        if (status === "success") {
            toast.success("محصول ویرایش شد");
        }
    }, [status, data])

    return (
        <div>
            <form action={updateProduct}>
                <Input type="text" name="product-name" id="product-name" placeholder="نام محصول" value={productName} onChange={handleChangeName} label="اسم محصول" />
                <ErrorMessage content={data?.name} />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input type="number" name="product-price" placeholder="قیمت محصول" value={productPrice} onChange={handleChangePrice} id="product-price" label="قیمت محصول" />
                        <ErrorMessage content={data?.price} />
                    </div>
                    <div>
                        <Input type="number" name="product-saleprice" placeholder="قیمت با تخفیف" value={productSalePrice as string} onChange={handleChangeSalePrice} id="product-saleprice" label="قیمت با تخفیف" />
                    </div>
                </div>
                <Input type="number" name="product-instock" placeholder="موجودی" value={productInStock?.toString()} onChange={handleInStockChange} id="produc-instock" label="موجودی" />
                <ErrorMessage content={data?.instock} />
                <div className="grid grid-cols-2 gap-4">
                    <Category items={props.category} name="product-category" id={props.product.categoryId} />
                    <Tag items={props.tag} name="product-tag" id={props.product.tagId} />
                </div>
                <InputUploader name="product-image" image={props.product?.image} label="عکس محصول" />
                <ErrorMessage content={data?.image} />
                <input type="hidden" name="product-id" value={props.product.id} />
                <SubmitButton onPress={handleButton}>ویرایش محصول</SubmitButton>
            </form>
        </div>
    )
}

export default EditProduct;