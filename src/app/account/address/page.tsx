import PageHeader from "@/app/components/pageHeader";
import { Auth } from "@/app/lib/auth-user";
import { prisma } from "@/app/lib/db";
import CreateAddress from "../_components/create-address";
import Title from "@/app/components/ui/title";
import DeleteAddressButton from "../_components/delete-address";

async function page() {

    const user = await Auth();

    const address = await prisma.address.findMany({
        where: {
            userId: user?.user.id
        }
    })

    console.log(address);

    if (address?.length === 0) {
        return (
            <div>
                <PageHeader title="آدرس های من" backIcon={true} backHref="/account" />
                <div className="px-8 pt-36">
                    <div className="flex items-center justify-center">
                        هنوز آدرسی ثبت نکردید
                    </div>
                    <CreateAddress user={user?.user} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <PageHeader title="آدرس های من" backIcon={true} backHref="/account" />
            <div className="px-8 pt-6">
                <div className="pb-6">
                    <Title>آدرس ها</Title>
                </div>
                {address.map((item, index) => (
                    <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-b-[var(--border-color)] last:border-b-0" key={item.id}>
                        <div>
                            <div className="text-[12px]">
                                آدرس
                            </div>
                            <div className="text-[12px] pt-2">
                                {item.address}, پلاک: {item.housenumber}, زنگ: {item.ring}
                            </div>
                            <div className="pt-2">
                                <DeleteAddressButton id={item.id} />
                            </div>
                        </div>
                    </div>
                ))}
                <CreateAddress user={user?.user} />
            </div>
        </div>
    )
}

export default page;