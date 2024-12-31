"use client";
import { UpdateAccount } from "@/app/action/account/update";
import ErrorMessage from "@/app/components/ui/errorMessage";
import Input from "@/app/components/ui/input";
import SubmitButton from "@/app/components/ui/submitButton";
import { User } from "@prisma/client";
import { useActionState, useState } from "react";
import { toast } from "sonner";

interface EditAccountProps{
    user:User | any
}

function EditAccount(props:EditAccountProps) {

    const [name,setName] = useState(props.user.name);
    const [email,setEmail] = useState(props.user.email);
    const [phone,setPhone] = useState(props.user.phone || "");

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const [data,updateAccount] = useActionState(UpdateAccount,null);

    console.log(data);

    return (    
        <div className="px-8 pt-28">
            <form action={updateAccount}>
                <Input type="text" name="user-name" id="user-name" placeholder="نام کاربری" label="نام کاربری" value={name} onChange={handleNameChange}/>
                <ErrorMessage content={data?.name} />
                <Input type="email" name="user-email" id="user-email" placeholder="ایمیل" label="ایمیل" value={email} onChange={handleEmailChange}/>
                <ErrorMessage content={data?.email} />
                <Input type="number" name="user-phone" id="user-phone" placeholder="شماره موبایل" label="شماره موبایل" value={phone} onChange={handlePhoneChange} required/>
                <ErrorMessage content={data?.phone} />
                <input type="hidden" name="user-id" value={props.user.id} />
                <SubmitButton full onPress={() => data?.status === "success" && toast.success("حساب کاربری ویرایش شد")}>ویرایش حساب کاربری</SubmitButton>
            </form>
        </div>
    )
}

export default EditAccount;