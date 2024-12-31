import SignIn from "@/app/components/login";
import { Auth } from "../lib/auth-user";
import { redirect } from "next/navigation";

async function Login(){

    const user = await Auth();

    if(user){
        return redirect("/account");
    }

    return(
        <div className="max-w-xl m-auto bg-[var(--background-color)]">
            <div className="w-full h-[100vh] min-h-[100vh]">
                <SignIn />
            </div>
        </div>
    )
}

export default Login;