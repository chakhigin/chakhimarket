"use client";

import Button from "../../components/ui/button";
import { Edit, TrashBin } from "akar-icons";
import { useContext, useState } from "react";
import { ModalContext } from "@/app/context/modalContext";
import { toast } from "sonner";
import DeleteTag from "@/app/action/tag/delete";
import EditTag from "./edit-tag";
import { Tag } from "@prisma/client";
import Pagination from "./pagination";

interface TagListProps{
    tag: any
}

function TagList(props:TagListProps){

    const [tagId,setTagId] = useState("");
    const [tagName,setTagName] = useState("");
    const {setOpenModal} = useContext(ModalContext);

    const editButton = (id:string,name:string) => {
        setTagId(id);
        setTagName(name);
        setOpenModal(true);
    }

    if(props.tag.length === 0){
        return(
            <div className="flex flex-col items-center justift-center mt-4">
                <div className="text-[14px]">
                    برچسبی وجود ندارد
                </div>
            </div>
        )
    }
    return(
        <div className="flex items-center w-full">
            <div className="flex flex-col w-full">
                {props.tag.map((tag:any,index:any) => (
                    <div className="flex items-center justify-between w-full border-b border-b-[var(--border-color)] p-3 last:border-none" key={tag.id}>
                        <div>
                            <span className="text-[12px]">
                                { index + 1 }
                            </span>
                        </div>
                        <div className="w-52 max-w-52">
                            <span className="text-[12px]">{tag.name}</span>
                        </div>
                        <div className="w-52 max-w-52">
                            <span className="text-[12px]">{tag.products.length} محصول</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <Button unStyle icon={<Edit width={15} height={15} color="#898989"/>} className="!text-[12px] text-[#898989]" onPress={() => editButton(tag.id,tag.name)}>ویرایش</Button> 
                            </div>
                            <div>
                                <form action={DeleteTag}>
                                    <input type="hidden" name="tag-id" value={tag.id} />
                                    <Button unStyle icon={<TrashBin width={13} height={13} color="rgb(248 113 113 / var(--tw-text-opacity, 1))"/>} className="!text-[12px] text-red-400" onPress={() => toast.success('برچسب حذف شد')}>حذف</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
                <Pagination items={props.tag} />
            </div>
            <EditTag tagId={tagId} tagName={tagName} />
        </div>
    )
}

export default TagList;