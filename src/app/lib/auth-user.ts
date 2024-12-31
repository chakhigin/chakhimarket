"use server";
import { headers } from "next/headers"
import { auth } from "./auth"

export const Auth = async () => {
    const user = auth.api.getSession({
        headers : await headers()
    })

    return user;
}