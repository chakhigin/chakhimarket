"use client";
import React from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

interface SliderItemProps {
    children:React.ReactNode,
    itemsPerSlide?: number,
    autoPlay?: boolean,
    showNextItem?: boolean,
    offsetBefore?:number,
    offsetAfter?:number,
    loop?:boolean,
}


function SliderItem(props: SliderItemProps) {
    return (
        <div className="w-full">
            <Swiper
                spaceBetween={14}
                allowSlidePrev={props.showNextItem}
                slidesPerView={'auto'}
                autoplay={{
                    delay:props.autoPlay ? 3300 : 10000000000000,
                }}
                loop={false}
                slidesOffsetAfter={props.offsetAfter}
                slidesOffsetBefore={props.offsetBefore}
                modules={[Autoplay]}
            >
                {props.children}
            </Swiper>
        </div>
    )
}

export default SliderItem;