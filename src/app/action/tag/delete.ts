"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";

async function DeleteTag(formData : FormData){
    const id = formData.get("tag-id") as string;

    const data = await prisma.tag.delete({
        where:{
            id
        }
    })
    revalidatePath("/admin/tag")
}

export default DeleteTag;