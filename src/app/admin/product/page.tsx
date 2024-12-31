
import { Category, Product } from "@prisma/client";
import Card from "../../components/ui/card";
import Title from "../../components/ui/title";
import { prisma } from "../../lib/db";
import ProductList from "../components/product-list";
import Button from "@/app/components/ui/button";
import { SearchParams } from "nuqs";
import { searchParamsCache } from "@/app/lib/search-params";

type PageProps = {
    searchParams: Promise<SearchParams>
}

async function page(searchParams: PageProps){

    const {page : pageNumber} : any = await searchParams.searchParams;

    const products: Product[] = await prisma.product.findMany({
        include:{
            category:{
                select:{
                    id:true,
                    name:true,
                }
            },
            _count:{
                select:{
                    orders:true
                }
            }
        },
        orderBy:{
            createdAt:"asc"
        },
        take:10,
        skip:pageNumber === undefined ? 0 : pageNumber * 10,
    });

    const category: Category[] = await prisma.category.findMany();
    const tag = await prisma.tag.findMany();

    return(
        <div>
            <div className="flex items-center mb-4">
                <Button isLink href="/admin/product/new">
                    افزودن محصول جدید
                </Button>
            </div>
            <Card>
                <Title>محصولات</Title>
                <ProductList products={products} category={category} tag={tag}/>
            </Card>
        </div>
    )
}

export default page;