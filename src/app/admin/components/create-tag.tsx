"use client";

import AddTag from "@/app/action/tag/create";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Title from "@/app/components/ui/title";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useActionState, useState } from "react";
import { toast, Toaster } from "sonner";

function CreateTag() {

    const [data, createTag, isPending] = useActionState(AddTag, null);
    const [showModal, setShowModal] = useState(false);

    const handleButton = () => {
        setShowModal(true);
    }

    const handleCloseButton = () => {
        setShowModal(false);
        toast.success('برچسب افزوده شد');
    }

    return (
        <div className="flex items-center">
            <div className="mb-4">
                <Button onPress={handleButton}>افزودن برچسب جدید</Button>
            </div>

            <Dialog open={showModal} onClose={() => setShowModal(false)} className="w-full relative z-50">
                <DialogBackdrop transition
                    className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
                    <DialogPanel transition
                        className="w-full max-w-lg space-y-4 bg-white p-4 rounded-md duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        <DialogTitle><Title>افزودن برچسب</Title></DialogTitle>
                        <form action={createTag}>
                            <Input type="text" name="tag-name" id="tag-name" placeholder="نام برچسب" label="نام برچسب" />
                            <Button onPress={handleCloseButton} disable={isPending}>
                                افزودن برچسب
                            </Button>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default CreateTag;