import { Category, Tag } from "@prisma/client";
import CreateProduct from "../../components/create-product";
import { prisma } from "@/app/lib/db";

async function page() {

    const category: Category[] = await prisma.category.findMany();
    const tag: Tag[] = await prisma.tag.findMany();

    return (
        <div>
            <CreateProduct category={category} tag={tag}/>
        </div>
    )
}

export default page;