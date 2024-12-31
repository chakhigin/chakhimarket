import { prisma } from "@/app/lib/db";
import CategoryList from "../components/category-list";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import CreateCategory from "../components/create-category";
import { SearchParams } from "nuqs";

type PageProps = {
    searchParams: Promise<SearchParams>
}

async function page(searchParams: PageProps){

    const {page: pageNumber} : any = await searchParams.searchParams;

    const category = await prisma.category.findMany({
        include:{
            products:true
        },
        take:10,
        skip:pageNumber === undefined ? 0 : pageNumber * 10
    });

    const parentCategory = await prisma.parentCategory.findMany();

    const categorys = [];
    categorys.push(category,parentCategory);

    return(
        <div>
            <CreateCategory  parentCategory={parentCategory} />
            <Card>
                <Title>دسته بندی ها</Title>
                <CategoryList category={category} parentCategory={parentCategory}/>
            </Card>
        </div>
    )
}

export default page;