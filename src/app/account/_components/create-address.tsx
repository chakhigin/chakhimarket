"use client";
import AddAddress from "@/app/action/address/create";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Modal from "@/app/components/ui/modal";
import SubmitButton from "@/app/components/ui/submitButton";
import { ModalContext } from "@/app/context/modalContext";
import { User } from "@prisma/client";
import { useActionState, useContext } from "react";

interface CreateAddressProps{
    user:any
}

function CreateAddress(props:CreateAddressProps){

    const {modal,setOpenModal} = useContext<any>(ModalContext);
    const [data,addAddress] = useActionState(AddAddress,null);

    console.log(data);
    return(
        <div>
            <Button full onPress={() => setOpenModal(true)}>
                افزودن آدرس جدید
            </Button>
            <Modal title="افزودن آدرس">
                <form action={addAddress}>
                    <Input type="text" name="user-address" id="user-address" placeholder="آدرس" label="آدرس" />
                    <Input type="number" name="user-housenumber" id="user-housenumber" placeholder="شماره پلاک" label="شماره پلاک" />
                    <Input type="number" name="user-ring" id="user-ring" placeholder="شماره زنگ" label="شماره زنگ" />
                    <input type="hidden" name="user-id" value={props.user?.id} />
                    <SubmitButton full>
                        افزودن آدرس
                    </SubmitButton>
                </form>
            </Modal>
        </div>
    )
}

export default CreateAddress;