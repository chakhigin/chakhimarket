import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import path from "path";
import { writeFile } from "fs/promises"; 

export const POST = async (req:NextRequest, res:any) => {
  const formData = await req.formData();

  const file = formData.get("file")  as File || null;
  if (!file) {
    return res.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_"); 
  try {
    await writeFile(
      path.join(process.cwd(), "public/images/" + filename),
      buffer
    );
    return res.json({ content: filename, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return res.json({ content: "Failed", status: 500 });
  }
};
