import { prisma } from "@/app/lib/db";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import CreateTag from "../components/create-tag";
import TagList from "../components/tag-list";
import { SearchParams } from "nuqs";

type PageProps = {
    searchParams: Promise<SearchParams>
}

async function page(searchParams: PageProps){

    const {page : pageNumber} : any = await searchParams.searchParams;

    const tag = await prisma.tag.findMany({
        include:{
            products:true
        },
        take:10,
        skip:pageNumber === undefined ? 0 : pageNumber * 10
    });

    return(
        <div>
            <CreateTag />
            <Card>
                <Title>دسته بندی ها</Title>
                <TagList tag={tag}/>
            </Card>
        </div>
    )
}

export default page;