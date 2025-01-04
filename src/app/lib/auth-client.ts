import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    // baseURL: "https://chakhimarket.netlify.app",
    baseURL: "http://localhost:3000"
})