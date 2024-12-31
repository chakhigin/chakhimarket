import PageHeader from "@/app/components/pageHeader";
import { Auth } from "@/app/lib/auth-user";
import { prisma } from "@/app/lib/db";
import EditAccount from "../_components/edit-account";

async function page() {

    const user = await Auth();

    const userData = await prisma.user.findUnique({
        where:{
            id:user?.user.id
        }
    })

    return (
        <div className="min-h-screen">
            <PageHeader title="تنظیمات" backIcon={true} backHref="/account"/>
            <EditAccount user={userData} />
        </div>
    )
}

export default page;