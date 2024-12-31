"use client";

import Button from "../../components/ui/button";
import { Category, ParentCategory } from "@prisma/client";
import { Edit, EyeOpen, TrashBin } from "akar-icons";
import { useContext, useState } from "react";
import { ModalContext } from "@/app/context/modalContext";
import DeleteCategory from "@/app/action/category/delete";
import EditCategory from "./edit-category";
import { toast } from "sonner";
import Pagination from "./pagination";

interface ProductListProps {
    category: any,
    parentCategory: ParentCategory[],
}

function CategoryList(props: ProductListProps) {

    const [categoryId, setCategoryId] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [parentCategoryId,setParentCategoryId] = useState("");
    const { setOpenModal } = useContext(ModalContext);

    const editButton = (id: string, name: string,parentCategoryid:string) => {
        setCategoryId(id);
        setCategoryName(name);
        setParentCategoryId(parentCategoryid);
        setOpenModal(true);
    }

    if (props.category.length === 0) {
        return (
            <div className="flex flex-col items-center justift-center mt-4">
                <div className="text-[14px]">
                    دسته بندی ای وجود ندارد
                </div>
            </div>
        )
    }
    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col w-full">
                {props.category.map((category:any, index:any) => (
                    <div className="flex items-center justify-between w-full border-b border-b-[var(--border-color)] p-3 last:border-none" key={category.id}>
                        <div>
                            <span className="text-[12px]">
                                {index + 1}
                            </span>
                        </div>
                        <div className="w-52 max-w-52">
                            <span className="text-[12px]">{category.name}</span>
                        </div>
                        <div className="w-52 max-w-52">
                            <span className="text-[12px]">{category?.products?.length} محصول</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <Button unStyle icon={<EyeOpen width={19} height={19} color="#898989" />} className="text-[12px] text-[#898989]" isLink href={`/admin/category/product/${category.id}`}>
                                    مشاهده محصولات
                                </Button>
                            </div>
                            <div>
                                <Button unStyle icon={<Edit width={15} height={15} color="#898989" />} className="!text-[12px] text-[#898989]" onPress={() => editButton(category.id, category.name,category.parentCategoryId)}>ویرایش</Button>
                            </div>
                            <div>
                                <form action={DeleteCategory}>
                                    <input type="hidden" name="category-id" value={category.id} />
                                    <Button unStyle icon={<TrashBin width={13} height={13} color="rgb(248 113 113 / var(--tw-text-opacity, 1))" />} className="!text-[12px] text-red-400" onPress={() => toast.success('دسته بندی حذف شد')}>حذف</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
                <Pagination items={props.category} />
            </div>
            <EditCategory categoryId={categoryId} categoryName={categoryName} parentCategoryId={parentCategoryId} parentCategory={props.parentCategory} />
        </div>
    )
}

export default CategoryList;