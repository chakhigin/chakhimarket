import { prisma } from "@/app/lib/db";
import EditProduct from "../../components/edit-product";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";

async function page({params}:{params: Promise<{ id: string }>}) {

    const id = (await params).id;

    const product = await prisma.product.findUnique({
        where:{
            id:Number(id)
        },
        include:{
            category:true,
            tag:true
        }
    })

    const category = await prisma.category.findMany();
    const tag = await prisma.tag.findMany();

    return (
        <div className="pb-24">
            <div className="grid grid-cols-[2fr,1fr] gap-4">
            <Card>
                <Title>ویرایش محصول</Title>
                <EditProduct product={product} category={category} tag={tag}/>
            </Card>
            </div>
            <div>
            </div>
        </div>
    )
}

export default page;