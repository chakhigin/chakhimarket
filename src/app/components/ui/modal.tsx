"use client";

import { ModalContext } from "@/app/context/modalContext";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useState } from "react";
import Title from "./title";


interface ModalProps {
    children:React.ReactNode,
    title?:React.ReactNode,
}

function Modal(props: ModalProps) {

    const {openModal,setOpenModal} = useContext(ModalContext);
    
    return (
        <div>
            <Dialog open={openModal} onClose={() => setOpenModal(false)} className="w-full relative z-50">
                <DialogBackdrop transition
                className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
                    <DialogPanel transition
                        className="w-full max-w-lg space-y-4 bg-white p-4 rounded-md duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        <DialogTitle><Title>{props.title}</Title></DialogTitle>
                        {props.children}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default Modal;