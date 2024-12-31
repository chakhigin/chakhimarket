import { redirect } from "next/navigation";
import Title from "../components/ui/title";
import { Auth } from "../lib/auth-user";
import { prisma } from "../lib/db";
import OrderItems from "./_components/order-items";

async function page() {

    const user = await Auth();

    const orders = await prisma.order.findMany({
        where: {
            userId: user?.user.id
        }
    })

    if (!user) {
        return redirect("/login");
    }

    if (orders.length === 0) {
        return (
            <div className="h-auto">
                <div className="flex items-center justify-center min-h-full">
                    <div className="flex items-center justify-center min-h-full">
                        هیچ سفارشی ثبت نکردید
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-full h-full bg-[var(--background-color)]">
            <div className="px-8 pt-6">
                <Title>
                    سفارش های من
                </Title>
                <OrderItems orders={orders} />
            </div>
        </div>
    )
}

export default page;