"use client";

import Modal from '@/app/components/ui/modal';
import { ModalContext } from '@/app/context/modalContext';
import { useActionState, useContext, useState } from 'react';
import InputUploader from '@/app/components/ui/inputUploader';
import { toast } from 'sonner';
import SubmitButton from '@/app/components/ui/submitButton';
import { UpdateOrder } from '@/app/action/order/update';
import { Order } from '@prisma/client';
import ListBox from '@/app/components/ui/listbox';

interface EditOrderProps {
    orderId:string
}

const orderStatus = [
    {id:"ثبت سفارش",name:"ثبت سفارش"},
    {id:"درحال آماده سازی",name:"درحال آماده سازی"},
    {id:"تحویل به پیک",name:"تحویل به پیک"},
    {id:"تحویل داده شده",name:"تحویل داده شده"}
]

function EditOrder(props: EditOrderProps) {
    const { setOpenModal } = useContext(ModalContext);

    const [data, updateOrder, isPendding] = useActionState(UpdateOrder, null);

    const handleButton = () => {
        if (data?.status === "error") {
            setOpenModal(true);
            toast.error("محصول ویرایش نشد");
        } else {
            setOpenModal(false);
            toast.success("محصول ویرایش شد");
        }
    }

    return (
        <div>
            <Modal title="ویرایش سفارش">
                <form action={updateOrder}>
                    <ListBox items={orderStatus} selectedIndex={0} name="order-status" />
                    <input type="hidden" name="order-id" value={props.orderId} />
                    <SubmitButton onPress={handleButton}>ویرایش سفارش</SubmitButton>
                </form>
            </Modal>
        </div>
    )
}

export default EditOrder;