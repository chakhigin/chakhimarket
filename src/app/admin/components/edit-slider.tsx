import UpdateSlider from "@/app/action/slider/update";
import ErrorMessage from "@/app/components/ui/errorMessage";
import Input from "@/app/components/ui/input";
import InputUploader from "@/app/components/ui/inputUploader";
import Modal from "@/app/components/ui/modal";
import SubmitButton from "@/app/components/ui/submitButton";
import { ModalContext } from "@/app/context/modalContext";
import { useActionState, useContext, useState } from "react";
import { toast } from "sonner";

interface EditSliderProps {
    sliderId: string,
    sliderLink: string,
}

function EditSlider(props:EditSliderProps){

    const { setOpenModal } = useContext(ModalContext);
    const [sliderLink, setSliderLink] = useState(props.sliderLink);

    const handleChangeLink = (e: any) => {
        setSliderLink(e.target.value);
    }

    const [data, updateSlider, isPendding] = useActionState(UpdateSlider, null);

    const handleButton = () => {
        if(data?.status === "success"){
            setOpenModal(false);
            toast.success("بنر بروزرسانی شد");
        }else if(data?.status === "error"){
            setOpenModal(true);
            toast.error("بنر بروزرسانی نشد");
        }
    }
    return(
        <div>
            <Modal title="ویرایش محصول">
                <form action={updateSlider}>
                    <Input type="text" name="slider-link" id="slider-link" placeholder="لینک بنر" value={sliderLink === "" ? props.sliderLink : sliderLink} onChange={handleChangeLink} />
                    <ErrorMessage content={data?.link} />
                    <InputUploader name="slider-image"/>
                    <ErrorMessage content={data?.image} />
                    <input type="hidden" name="slider-id" value={props.sliderId} />
                    <SubmitButton onPress={handleButton}>ویرایش محصول</SubmitButton>
                </form>
            </Modal>
        </div>
    )
}

export default EditSlider;