"use client";
import { SwiperSlide } from "swiper/react";
import SliderItem from "./ui/slider";
import Link from "next/link";
import Image from "next/image";
import { Slider } from "@prisma/client";

interface BannerSliderProps {
    banners: Slider[]
}

function BannerSlider(props: BannerSliderProps) {
    return (
        <div className="px-8 pt-10">
            <SliderItem autoPlay={true} loop={true}>
                {props.banners.map((banner, index) => (
                    <SwiperSlide key={banner.id}>
                        <div key={banner.id} className="w-full h-[280px] rounded-md">
                            <Link href={banner.link} className="w-full h-full rounded-md">
                                <Image src={`http://localhost:3000/images/${banner.image}`} alt=""
                                    quality={100}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    className="rounded-md"
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </SliderItem>
        </div>
    )
}

export default BannerSlider;