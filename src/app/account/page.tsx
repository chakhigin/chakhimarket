import { redirect } from "next/navigation";
import { Auth } from "../lib/auth-user";
import PageHeader from "../components/pageHeader";
import AccountItems from "./_components/account-items";

async function page(){

    const user = await Auth();

    if(!user){
        return redirect("/login");
    }

    return(
        <div>
            <PageHeader title="حساب کاربری" backToHome={true} backIcon={true} />
            <div className="px-8 pt-14">
                خوش آمدی {user?.user.name}
            </div>
            <AccountItems />
        </div>
    )
}

export default page;