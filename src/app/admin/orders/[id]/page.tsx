import { prisma } from "@/app/lib/db";
import ShowOrder from "../../components/show-order";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";

async function page({params}: {params: Promise<{ id: string }>}) {

    const id = (await params).id;

    const order = await prisma.order.findMany({
        where:{
            id
        },
        include:{
            address:true
        }
    })

    console.log(order);

    return (
        <div>
            <Card>
                <Title>سفارش {order[0].id}</Title>
                <ShowOrder order={order} />
            </Card>
        </div>
    )
}

export default page;