import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import { prisma } from "@/app/lib/db";

async function TotalUsers(){

    const users = await prisma.user.findMany();

    return(
        <div>
            <div>
            <Card>
                <Title>
                    تعداد کاربران
                </Title>
                <div className="pt-2 text-[13px] text-[#898989]">
                    {users.length} کاربر
                </div>
            </Card>
        </div>
        </div>
    )
}

export default TotalUsers;