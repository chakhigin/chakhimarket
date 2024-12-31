import Card from "@/app/components/ui/card";
import SubmitButton from "@/app/components/ui/submitButton";
import Title from "@/app/components/ui/title";
import { prisma } from "@/app/lib/db";
import Image from "next/image";

async function SaleProducts() {

    const products = await prisma.product.findMany({
        where:{
            orderCounts:{
                lt:1
            }
        },
        include: {
            category: true
        },
        take: 5
    })

    return (
        <div>
            <Card>
                <Title>
                    کم فروش ترین محصولات
                </Title>
                <div className="pt-6">
                    {products.length === 0 ? <div className="text-[12px] text-[#898989]">هیچی فروش نداشتید</div> : <div>
                        {products.map((product, index) => (
                            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-b-[var(--border-color)] last:border-b-0 last:mb-0 last:pb-0" key={product.id}>
                                <div>{index + 1}</div>
                                <div className="flex items-center justify-center w-[59px]">
                                    <Image src={`http://localhost:3000/images/${product.image}`} alt={product.name} width={49} height={49} />
                                </div>
                                <div>
                                    <div className="text-[13px] pb-1">
                                        {product.name}
                                    </div>
                                    <div className="text-[11px] text-[#898989]">
                                        دسته بندی: {product.category?.name}
                                    </div>
                                </div>
                            </div>
                        ))}</div>}
                </div>
            </Card>
        </div>
    )
}

export default SaleProducts;