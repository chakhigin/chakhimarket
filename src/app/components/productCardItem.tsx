import { Product } from "@prisma/client";
import { Plus } from "akar-icons";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FormatNumber } from "../utils/formatNumber";
import { toast } from "sonner";

interface ProductCardItemProps {
    product: Product
}

function ProductCardItem(props: ProductCardItemProps) {

    const { addItemsToCart } = useContext<any>(CartContext);

    const handleAddToCart = (product: any) => {
        addItemsToCart(product);
        toast.success(`${product.name} به سبد خرید اضافه شد`);
    }

    return (
        <div>
            <div key={props.product.id}>
                <div className="flex flex-col relative h-[218px] max-h-[218px] bg-[#fff] border border-[var(--border-color)] rounded-md shadow-card-shadow">
                    <div className="relative w-full flex items-center justify-center">
                        <div className="w-[130px] h-[130px] p-3">
                            <Image src={`http://localhost:3000/images/${props.product.image}`} alt={props.product.name} width={130} height={130} className="rounded-md" />
                            <div className="flex items-center justify-center absolute bottom-0 right-2 p-1 border w-[32px] h-[30px] rounded-full bg-[#fff] shadow-xl" onClick={() => handleAddToCart(props.product)}>
                                <Plus />
                            </div>
                        </div>
                        {props.product.salePrice && <div className="absolute top-2 left-2 bg-[#000] rounded-md">
                            <span className="text-[11px] text-[#fff] p-1">
                                {((Number(props.product.price) - Number(props.product.salePrice)) /  Number(props.product.price) * 100).toFixed()} %
                            </span>    
                        </div>}
                    </div>
                    <div className="p-2 pb-4">
                        <div><span className="text-[12px] line-clamp-2">{props.product.name}</span></div>
                        <div className="absolute bottom-2 pt-1">
                            <div className="flex items-center gap-1">
                                <span className={`${props.product.salePrice ? "text-[9px] text-[#898989]" : "text-[11px] font-bold"}`}>{FormatNumber(props.product.price)} تومان</span>
                                {props.product.salePrice && <span className="text-[11px] font-bold">{FormatNumber(props.product.salePrice)} تومان</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardItem;