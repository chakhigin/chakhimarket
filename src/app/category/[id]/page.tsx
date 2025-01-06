import { SearchParams } from 'nuqs/server';
import { prisma } from "@/app/lib/db";
import { searchParamsCache } from '@/app/lib/search-params';
import dynamic from 'next/dynamic';

const PageHeader = dynamic(() => import("@/app/components/pageHeader"));
const ProductItems = dynamic(() => import("../_components/category-items"));
const CategoryItems = dynamic(() => import("@/app/components/categoryItems"));
const CategoryList = dynamic(() => import("../_components/category-list"));
const FilterProducts = dynamic(() => import("../_components/filter-products"))

async function page({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<SearchParams> }) {

    const id = (await params).id;

    const filterPrice = searchParamsCache.parse(await searchParams).orderBy;

    const parentCategory = await prisma.parentCategory.findMany();

    const products = await prisma.product.findMany({
        where: {
            OR: [
                {
                    parentCategoryId: id
                },
                {
                    categoryId: id
                }
            ]
        },
        include: {
            category: true,
            parentCategory: {
                select: {
                    name: true,
                    category: true
                }
            }
        },
        orderBy: {
            price: filterPrice === "asc" || searchParamsCache.get("orderBy") === null ? "asc" : "desc"
        }
    })

    return (
        <div>
            {products.length !== 0 &&
                <div>
                    <PageHeader title="دسته بندی" subTitle={products[0].parentCategory?.name} backIcon={true} backToHome={true} />
                    <div className="pt-6">
                        <CategoryItems category={parentCategory} selectedCategoryName={products[0].parentCategory?.name} />
                        <div className="pt-2">
                            <CategoryList category={products[0].parentCategory?.category} selectedCategoryId={id} />
                        </div>
                    </div>
                    <FilterProducts />
                </div>
            }
            {products.length === 0 && <PageHeader title="دسته بندی" backIcon={true} backToHome={true} />}
            <ProductItems products={products} />
        </div>

    )
}

export default page;