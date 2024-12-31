"use client";
import SliderItem from "@/app/components/ui/slider";
import { Category } from "@prisma/client";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface CategoryListProps {
    category: Category[] | undefined,
    selectedCategoryId?: string
}

function CategoryList(props: CategoryListProps) {
    return (
        <div className="categorylist-slider">
            <SliderItem showNextItem={true} offsetBefore={30} offsetAfter={30} autoPlay={false}>
                {props.category?.map((item, index) => (
                    <SwiperSlide key={item.id} className="w-56">
                        <Link href={`/category/${item.id}`}>
                            <div className={`px-9 pt-2 pb-2 text-[11px] border border-[#000] rounded-md ${props.selectedCategoryId === item.id ? "text-[#fff] bg-[#000]" : "text-[#000]"}`}>
                                {item.name}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </SliderItem>
        </div>
    )
}

export default CategoryList;