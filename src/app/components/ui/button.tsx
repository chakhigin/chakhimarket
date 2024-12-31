"use client";

import Link from "next/link";
import { useState } from "react";

interface ButtonProps{
    children:React.ReactNode,
    onPress?:() => void,
    type?:"submit" | "button" | "reset",
    disable?:boolean,
    isLink?:boolean,
    href?:string,
    target?:"_blank",
    transparent?:boolean,
    icon?:React.ReactNode,
    className?: string,
    style?:string,
    buttonStyle?:string,
    unStyle?:boolean,
    full?:boolean
}

function Button(props:ButtonProps){

    const buttonStyle : any = {
        button:`flex items-center justify-center ${props.full ? "w-full" : "w-auto"} h-[38px] px-3 py-4 rounded-md text-[12px] cursor-pointer align-middle text-center ${props.transparent ? "bg-[transparent]" : "bg-[#000]"} ${props.transparent ? "text-[#000]" : "text-[#fff]" } disabled:opacity-5 ${props.className}`
    }

    if(props.buttonStyle === "category-slider"){
        buttonStyle.button = `flex items-center justify-center w-auto p-1 rounded-md text-[11px] text-[#fff] cursor-pointer bg-[#000]`;
    }

    if(props.unStyle){
        buttonStyle.button = props.className;
    }

    if(props.isLink){
        return(
            <div className={`flex items-center justify-center ${props.icon ? "gap-1" : ""}`}>
                {props.icon && props.icon}
                <Link href={props.href as string} target={props.target} aria-disabled={props.disable} className={buttonStyle.button}>{props.children}</Link>
            </div>
        )
    }

    return(
        <div className={`flex justify-center ${props.unStyle ? "" : "pt-3"} ${props.icon ? "gap-1" : ""}`}>
            {props.icon && props.icon}
            <button onClick={props.onPress} type={props.type} disabled={props.disable} aria-disabled={props.disable} className={buttonStyle.button}>{props.children}</button>
        </div>
    )
}

export default Button;