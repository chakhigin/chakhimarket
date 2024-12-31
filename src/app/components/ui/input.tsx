"use client";

import { Field, Label } from "@headlessui/react";

interface InputProps{
    id:string,
    type:"text" | "email" | "number" | "password" | "file",
    value?:string,
    defaultValue?:string,
    name?:string,
    label?:string,
    placeholder:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?:(e:React.ChangeEvent<HTMLInputElement>) => void,
    required?:boolean
}

function Input(props:InputProps){

    const InputStyle = "flex items-center w-full h-[25px] pt-4 pb-4 px-3 bg-[#fafafe] border-[.0625rem] border-[#abb] rounded-md text-[12px] text-[13px]"

    return(
        <div className="flex items-center">
            <div className="w-full pt-5">
                <Field>
                    <Label className="flex items-center text-[12px] pb-2" aria-label={props.label}>{props.label}</Label>
                    <input type={props.type} value={props.value} defaultValue={props.defaultValue} id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.onChange} onBlur={props.onBlur} required={props.required} className={InputStyle}/>
                </Field>
            </div>
        </div>
    )
}

export default Input;