import ProductList from "@/app/admin/components/product-list";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import { prisma } from "@/app/lib/db";
import { SearchParams } from "nuqs";

async function page({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<SearchParams> }){

    const id = (await params).id;

    const {page : pageNumber} : any = await searchParams;

    const products = await prisma.product.findMany({
        where:{
            categoryId:id
        },
        include:{
            category:true
        },
        take:10,
        skip:pageNumber === undefined ? 0 : pageNumber * 10
    })

    const category = await prisma.category.findMany();
    const tag = await prisma.tag.findMany();

    return(
        <div>
            <Card>
                <Title>{products[0]?.category?.name}</Title>
                <ProductList products={products} category={category} tag={tag}/>
            </Card>
        </div>
    )
}

export default page;