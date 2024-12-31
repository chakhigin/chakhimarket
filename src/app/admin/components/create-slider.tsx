"use client";
import AddSlider from "@/app/action/slider/create";
import Button from "@/app/components/ui/button";
import ErrorMessage from "@/app/components/ui/errorMessage";
import Input from "@/app/components/ui/input";
import InputUploader from "@/app/components/ui/inputUploader";
import SubmitButton from "@/app/components/ui/submitButton";
import Title from "@/app/components/ui/title";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useActionState, useContext, useState } from "react";
import { toast } from "sonner";

function CreateSlider() {

    const [data, addSlider, isPending] = useActionState(AddSlider, null);
    const [showModal, setShowModal] = useState(false);

    const handleButton = () => {
        setShowModal(true);
    }

    const handleCloseButton = () => {
        if (data?.status === "success") {
            setShowModal(false);
            toast.success('بنر اضافه شد');
        }else if(data?.status === "error"){
            setShowModal(true);
        }
    }

    return (
        <div className="flex items-center">
            <div className="mb-4">
                <Button onPress={handleButton}>افزودن بنر جدید</Button>
            </div>
            <Dialog open={showModal} onClose={() => setShowModal(false)} className="w-full relative z-50">
                <DialogBackdrop transition
                    className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
                    <DialogPanel transition
                        className="w-full max-w-lg space-y-4 bg-white p-4 rounded-md duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        <DialogTitle><Title>افزودن محصول جدید</Title></DialogTitle>
                        <form action={addSlider}>
                            <Input type="text" name="slider-link" id="slider-link" placeholder="لینک بنر" />
                            <ErrorMessage content={data?.link} />
                            <InputUploader name="slider-image" />
                            <ErrorMessage content={data?.image} />
                            <SubmitButton onPress={handleCloseButton}>افزودن بنر</SubmitButton>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>

    )
}

export default CreateSlider;