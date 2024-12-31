"use client";
import { Product } from "@prisma/client";
import { SwiperSlide } from "swiper/react";
import Title from "./ui/title";
import Button from "./ui/button";
import SliderItem from "./ui/slider";
import ProductCardItem from "./productCardItem";

interface ProductSliderProps {
    products: Product[],
    categoryName:string,
    tag?:boolean,
    tagId?:string
}

function ProductSlider(props: ProductSliderProps) {

    return (
        <div className="product-slider pt-10">
            <div className="flex items-center justify-between w-full px-8 pb-3">
                <Title>{props.categoryName}</Title>
                <Button isLink href={`${props.tag ? `/tag/${props.products[0].tagId?.toString()}` : `/category/${props.products[0].categoryId?.toString()}`}`} buttonStyle="category-slider">
                    همه محصولات
                </Button>
            </div>
            <SliderItem showNextItem={true} offsetBefore={30} offsetAfter={30} autoPlay={false}>
                {props.products.map((product, index) => (
                    <SwiperSlide key={product.id} className="w-56 pt-1 pb-1">
                        <ProductCardItem product={product}/>
                    </SwiperSlide>
                ))}
            </SliderItem>
        </div>
    )
}

export default ProductSlider;