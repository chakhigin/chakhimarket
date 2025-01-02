'use client';

import { useState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import { authClient } from "../lib/auth-client";
import { toast } from "sonner";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    const emailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const Signin = async () => {
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/account",
        },{
            onRequest : (ctx) => {
                setLoading(true);
            },
            onSuccess : (ctx) => {
                setLoading(false);
            },
            onError : (ctx) => {
                console.log(ctx.error);
                setLoading(false);
                if(ctx.error.message === "Invalid email"){
                    toast.error("ایمیل نامعتبر هست");
                }
                if(ctx.error.message === "Invalid email or password"){
                    toast.error("ایمیل یا رمزعبور اشتباه هست");
                }
            }
        });
    }

    return (
        <div className="felx items-center">
            <div className="w-full h-[100vh] bg-[#f5f5f0]">
                <div className="max-w-96 m-auto pt-48">
                    <div className="flex items-center justify-center pb-10">
                        <h1 className="text-[24px] font-bold">چخی<div><span className="text-[30px]">مارکت</span></div></h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Input type="email" id="email" name="email" value={email} placeholder="ایمیل" onChange={emailChange} />
                        <Input type="password" id="password" name="password" value={password} placeholder="رمزعبور" onChange={passwordChange} />
                        <Button onPress={Signin} disable={loading}>{loading ? "کمی صبر کنید" : "ورود به حساب کاربری"}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;