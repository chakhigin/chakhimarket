"use client";

import AddCategory from "@/app/action/category/create";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import InputUploader from "@/app/components/ui/inputUploader";
import Title from "@/app/components/ui/title";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useActionState, useState } from "react";
import { toast, Toaster } from "sonner";
import Category from "./category";
import AddParentCategory from "@/app/action/parentCategory/create";

interface CreateCategoryProps {
    parentCategory: any;
}


function CreateCategory(props: CreateCategoryProps) {

    const [data, addcategory, isPending] = useActionState(AddCategory, null);
    const [dataCategory,addParentCategory,isPendingCategory] = useActionState(AddParentCategory, null);
    const [showModal, setShowModal] = useState(false);

    const handleButton = () => {
        setShowModal(true);
    }

    const handleCloseButton = () => {
        setShowModal(false);
        toast.success('دسته بندی افزوده شد');
    }

    return (
        <div className="flex items-center">
            <div className="mb-4">
                <Button onPress={handleButton}>افزودن دسته بندی جدید</Button>
            </div>

            <Dialog open={showModal} onClose={() => setShowModal(false)} className="w-full relative z-50">
                <DialogBackdrop transition
                    className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
                    <DialogPanel transition
                        className="w-full max-w-lg space-y-4 bg-white p-4 rounded-md duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        <DialogTitle><Title>افزودن دسته بندی</Title></DialogTitle>
                        <form action={addcategory}>
                            <Input type="text" name="category-name" id="category-name" placeholder="نام دسته بندی" label="نام دسته بندی" />
                            <Category items={props.parentCategory} name="category-parent" />
                            <Button onPress={handleCloseButton} disable={isPending}>
                                افزودن دسته بندی
                            </Button>
                        </form>
                        <div>
                            <form action={addParentCategory}>
                                <Input type="text" name="category-name" id="category-name" placeholder="نام دسته بندی" label="نام دسته بندی" />
                                <InputUploader name="category-image" label="عکس دسته بندی" />
                                <Button disable={isPendingCategory}>
                                    افزودن دسته بندی
                                </Button>
                            </form>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default CreateCategory;