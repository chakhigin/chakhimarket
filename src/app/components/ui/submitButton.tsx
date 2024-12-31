"use client";

import { useFormStatus } from "react-dom";
import Button from "./button";

interface SubmitButtonProps{
    children:React.ReactNode,
    icon?:React.ReactNode,
    onPress?:() => void,
    full?:boolean
}

function SubmitButton(props:SubmitButtonProps){

    const {pending} = useFormStatus();

    return(
        <Button type="submit" onPress={props.onPress} full={props.full} disable={pending}>{props.children}</Button>
    )
}

export default SubmitButton;