import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import { prisma } from "@/app/lib/db";
import { FormatNumber } from "@/app/utils/formatNumber";

async function TotalSales() {

    const sales = await prisma.product.findMany({
        select:{
            qty:true,
            orderCounts:true,
            price:true
        }
    })

    const totalSales = sales.reduce((total,item : any) => total + item.qty * item.orderCounts * item.price, 0);

    return (
        <div>
            <div>
                <Card>
                    <Title>
                        کل فروش
                    </Title>
                    <div className="pt-2 text-[13px] text-[#898989]">
                        {FormatNumber(totalSales)} تومان
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default TotalSales;