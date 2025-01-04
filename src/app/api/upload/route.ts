import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import path from "path";
import { writeFile } from "fs/promises"; 

export const POST = async (req:NextRequest,res:NextResponse) => {
  const formData = await req.formData();

  const file = formData.get("file")  as File || null;
  console.log(file)
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_"); 
  try {
    await writeFile(
      path.join(process.cwd(), "public/images/" + filename),
      buffer
    );
    return NextResponse.json({ content: filename, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ content: "Failed", status: 500 });
  }
};
