"use client";

import Button from "@/app/components/ui/button";
import { Slider } from "@prisma/client";
import { Edit, TrashBin } from "akar-icons";
import { toast } from "sonner";
import EditSlider from "./edit-slider";
import { useContext, useState } from "react";
import { ModalContext } from "@/app/context/modalContext";
import DeleteSlider from "@/app/action/slider/delete";

interface SliderListProps{
    sliders: Slider[]
}

function SliderList(props:SliderListProps){

    const {setOpenModal} = useContext(ModalContext);
    const [sliderId,setSliderId] = useState("");
    const [sliderLink,setSliderLink] = useState("");


    const editButton = (id:string,link:string) => {
        setSliderId(id);
        setSliderLink(link);
        setOpenModal(true);
    }

    if(props.sliders.length === 0){
        return(
            <div className="flex flex-col items-center justift-center mt-4 mb-4">
                <div className="text-[14px]">
                    بنری وجود ندارد
                </div>
            </div>
        )
    }
    return(
        <div>
            <div className="flex items-center w-full">
                <div className="flex flex-col w-full">
                    {props.sliders.map((slider,index) => (
                        <div className="flex items-center justify-between w-full border-b border-b-[var(--border-color)] p-3 last:border-none" key={slider.id}>
                            <div>
                                <span className="text-[14px]">
                                    { index + 1 }
                                </span>
                            </div>
                            <div className="w-52 max-w-52">
                                <span className="text-[14px]">{slider.link}</span>
                            </div>
                            <div className="flex items-center gap-8">
                                <div>
                                    <Button transparent icon={<Edit width={20} height={20} />} className="!text-[13px]" onPress={() => editButton(slider.id,slider.link)}>ویرایش</Button> 
                                </div>
                                <div>
                                    <form action={DeleteSlider}>
                                        <input type="hidden" name="slider-id" value={slider.id} />
                                        <Button transparent icon={<TrashBin width={20} height={20} color="rgb(248 113 113 / var(--tw-text-opacity, 1))"/>} className="!text-[13px] text-red-400" onPress={() => toast.success("بنر حذف شد")}>حذف</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <EditSlider sliderId={sliderId} sliderLink={sliderLink} />
            </div>
        </div>
    )
}

export default SliderList;