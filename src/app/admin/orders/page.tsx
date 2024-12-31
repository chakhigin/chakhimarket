import { prisma } from "@/app/lib/db";
import OrdersList from "../components/orders-list";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import { SearchParams } from "nuqs";

type PageProps = {
    searchParams: Promise<SearchParams>
}

async function page(searchParams: PageProps){

    const {page : pageNumber} : any = await searchParams.searchParams;

    const orders = await prisma.order.findMany({
        take:10,
        skip:pageNumber === undefined ? 0 : pageNumber * 10,
    });

    return(
        <div>
            <Card>
                <Title>سفارشات</Title>
                <OrdersList orders={orders} />
            </Card>
        </div>
    )
}

export default page;