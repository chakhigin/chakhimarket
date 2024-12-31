import { prisma } from "@/app/lib/db";
import { searchParamsCache } from "@/app/lib/search-params";
import { SearchParams } from "nuqs";
import TagItems from "../_components/tag-items";
import PageHeader from "@/app/components/pageHeader";

async function page({params,searchParams}: {params: Promise<{ id: string }>,searchParams: Promise<SearchParams>}){

    const id = (await params).id;

    const filterPrice = searchParamsCache.parse(await searchParams).orderBy;

    const product = await prisma.product.findMany({
        where:{
            tagId:id
        },
        include:{
            tag:true,
            category:true
        },
        orderBy: {
            price: filterPrice === "asc" || searchParamsCache.get("orderBy") === null ? "asc" : "desc"
        }
    })

    return(
        <div>
            <PageHeader title={`${product[0].tag?.name}`} backIcon={true} backToHome={true} />
            <TagItems products={product} />
        </div>
    )
}

export default page;