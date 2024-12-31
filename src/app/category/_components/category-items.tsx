"use client";
import ProductCardItem from "@/app/components/productCardItem";
import { Product } from "@prisma/client";

interface ProductsItemsProps {
    products: Product[]
}

function ProductsItems(props: ProductsItemsProps) {

    if(props.products.length === 0){
        return(
            <div className="h-full">
                <div className="flex items-center">
                    <div className="text-[12px]">
                        محصولی وجود ندارد
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="px-8 pt-4 pb-24">
            <div className="grid grid-cols-3 gap-x-5 gap-y-4">
                {props.products?.map((product, index) => (
                    <ProductCardItem product={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsItems;