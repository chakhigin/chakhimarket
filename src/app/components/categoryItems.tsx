"use client";
import { ParentCategory } from "@prisma/client";
import SliderItem from "./ui/slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemsProps {
    category: ParentCategory[],
    selectedCategoryName?:string,
}

function CategoryItems(props: CategoryItemsProps) {

    return (
        <div className="category-slider">
            <SliderItem showNextItem={true} offsetBefore={30} offsetAfter={30} autoPlay={false}>
                {props.category.map((item, index) => (
                    <SwiperSlide key={item.id} className="w-56">
                        <div className="flex items-center justify-center flex-col">
                            <Link href={`/category/${item.id}`} className="flex items-center justify-center flex-col">
                                <div className={`w-[82px] h-[82px] bg-[#fff] p-2 rounded-md shadow-card-shadow ${props.selectedCategoryName === item.name ? "border-2 border-[#000]" : "border border-[var(--border-color)]"}`}>
                                    <Image src={`/images/${item.image}`} alt={item.name} width={82} height={82} quality={100} style={{objectFit: 'cover',}} className="rounded-md" />
                                </div>
                                <div className="text-[11px] pt-2">
                                    {item.name}
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </SliderItem>
        </div>
    )
}

export default CategoryItems;