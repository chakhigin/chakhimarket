"use client";

import Button from "../../components/ui/button";
import { Category, Product } from "@prisma/client";
import { Edit, TrashBin } from "akar-icons";
import EditProduct from "./edit-product";
import { useContext, useState } from "react";
import DeleteProduct from "../../action/product/delete";
import { ModalContext } from "@/app/context/modalContext";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import { FormatNumber } from "@/app/utils/formatNumber";
import Pagination from "./pagination";

interface ProductListProps {
    products: any,
    category: Category[],
    tag: any
}

function ProductList(props: ProductListProps) {

    const [productId, setProductId] = useState(0);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productSalePrice, setProductSalePrice] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productInStock, setProductInStock] = useState<number>();
    const { setOpenModal } = useContext(ModalContext);

    const editButton = (id: number, name: string, price: string, salePrice: string, inStock: number, image: string) => {
        setProductId(id);
        setProductName(name);
        setProductPrice(price);
        setProductSalePrice(salePrice);
        setProductInStock(inStock);
        setProductImage(image);
        setOpenModal(true);
    }

    if (props.products.length === 0) {
        return (
            <div className="flex flex-col items-center justift-center mt-4 mb-4">
                <div className="text-[14px]">
                    محصولی وجود ندارد
                </div>
            </div>
        )
    }
    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col w-full">
                {props.products.map((product:any, index:any) => (
                    <div className="flex items-center justify-between w-full border-b border-b-[var(--border-color)] p-3 last:border-none last:pb-0" key={product.id}>
                        <div>
                            <span className="text-[12px]">
                                {index + 1}
                            </span>
                        </div>
                        <div className="flex items-center justify-center w-[82px] h-[82px]">
                            <Image src={`http://localhost:3000/images/${product.image}`} alt={product.name} width={49} height={49} />
                        </div>
                        <div className="w-48 max-w-48">
                            <span className="text-[12px] line-clamp-1">{product.name}</span>
                        </div>
                        <div className="w-32 max-w-32">
                            <span className="text-[12px]">{FormatNumber(product.price)} تومان</span>
                        </div>
                        <div className="w-32 max-w-32">
                            <span className="text-[12px]">{product.orderCounts} سفارش</span>
                        </div>
                        <div className="w-32 max-w-32">
                            <span className="text-[12px]">{product.category.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <Button isLink href={`/admin/product/${product.id}`} unStyle icon={<Edit width={15} height={15} color="#898989" />} className="text-[12px] text-[#898989]">ویرایش</Button>
                            </div>
                            <div>
                                <form action={DeleteProduct}>
                                    <input type="hidden" name="product-id" value={product.id} />
                                    <Button unStyle icon={<TrashBin width={13} height={13} color="rgb(248 113 113 / var(--tw-text-opacity, 1))" />} className="text-[12px] text-red-400" onPress={() => toast.success("محصول حذف شد")}>حذف</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
                <Pagination items={props.products}/>
            </div>
        </div>
    )
}

export default ProductList;