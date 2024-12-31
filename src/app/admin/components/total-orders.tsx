import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import { prisma } from "@/app/lib/db";

async function TotalOrders(){

    const orders = await prisma.order.findMany();

    return(
        <div>
            <Card>
                <Title>
                    تعداد سفارشات
                </Title>
                <div className="pt-2 text-[13px] text-[#898989]">
                    {orders.length} سفارش
                </div>
            </Card>
        </div>
    )
}

export default TotalOrders;