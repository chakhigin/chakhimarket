"use client";

import { UpdateCategory } from '@/app/action/category/update';
import Button from '@/app/components/ui/button';
import Input from '@/app/components/ui/input';
import Modal from '@/app/components/ui/modal';
import { ModalContext } from '@/app/context/modalContext';
import { useActionState, useContext, useState } from 'react';
import Category from './category';
import { ParentCategory } from '@prisma/client';

interface EditCategoryProps {
    categoryId: string,
    categoryName: string,
    parentCategoryId:string,
    parentCategory:ParentCategory[]
}

function EditCategory(props: EditCategoryProps) {
    const { setOpenModal } = useContext(ModalContext);
    const [categoryName, setCategoryName] = useState(props.categoryName);

    const handleCategoryName = (e: any) => {
        setCategoryName(e.target.value);
    }

    const [data, updateCategory, isPendding] = useActionState(UpdateCategory, null)

    return (
        <div>
            <Modal title="ویرایش دسته بندی">
                <form action={updateCategory}>
                    <Input type="text" name="category-name" id="category-name" placeholder="نام دسته بندی" value={categoryName === "" ? props.categoryName : categoryName} onChange={handleCategoryName} label="نام دسته بندی"/>
                    <Category items={props.parentCategory} name="category-parent" id={props.parentCategoryId}/>
                    <input type="hidden" name="category-id" value={props.categoryId} />
                    <Button onPress={() => setOpenModal(false)} disable={isPendding}>ویرایش دسته بندی</Button>
                </form>
            </Modal>

        </div>
    )
}

export default EditCategory;