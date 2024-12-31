import CategoryItems from "@/app/components/categoryItems";
import { prisma } from "@/app/lib/db";

async function CategorySlider(){

    const category = await prisma.parentCategory.findMany();

    return(
        <div>
            <CategoryItems category={category} />
        </div>
    )
}

export default CategorySlider;