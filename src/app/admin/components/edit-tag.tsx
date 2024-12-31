"use client";

import { UpdateCategory } from '@/app/action/category/update';
import { UpdateTag } from '@/app/action/tag/update';
import Button from '@/app/components/ui/button';
import Input from '@/app/components/ui/input';
import Modal from '@/app/components/ui/modal';
import { ModalContext } from '@/app/context/modalContext';
import { useActionState, useContext, useState } from 'react';

interface EditTagProps {
    tagId: string,
    tagName: string,
}

function EditTag(props: EditTagProps) {
    const { setOpenModal } = useContext(ModalContext);
    const [tagName, setTagName] = useState(props.tagName);

    const handleTagName = (e: any) => {
        setTagName(e.target.value);
    }

    const [data, updateTag, isPendding] = useActionState(UpdateTag, null)

    return (
        <div>
            <Modal title="ویرایش برچسب">
                <form action={updateTag}>
                    <Input type="text" name="tag-name" id="tag-name" placeholder="نام برچسب" value={tagName === "" ? props.tagName : tagName} onChange={handleTagName} />
                    <input type="hidden" name="tag-id" value={props.tagId} />
                    <Button onPress={() => setOpenModal(false)} disable={isPendding}>ویرایش برچسب</Button>
                </form>
            </Modal>

        </div>
    )
}

export default EditTag;