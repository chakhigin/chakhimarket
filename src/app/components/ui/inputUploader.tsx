"use client";
import { Field, Label } from "@headlessui/react";
import { Image as ImageIcon, TrashBin } from "akar-icons";
import axios from "axios";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./button";

interface InputUploaderProps {
    name: string,
    image?:any,
    label?: string
}

function InputUploader(props: InputUploaderProps) {

    const [image, setImage] = useState(props.image || null);

    const fileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (file) {
            const formData = new FormData();
            formData.append("file", file[0]);
            try {
                const data: any = await axios.post("https://chakhimarket.netlify.app/api/upload", formData)
                setImage(data.data.content);
                setCookie("product-image-name", data.data.content);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    const InputStyle = "flex items-center justify-center gap-5 w-full h-[89px] px-3 bg-[#fafafe] border-[.0625rem] border-[#abb] rounded-md text-[14px]"

    return (
        <div className="flex items-center">
            <div className="w-full pt-5">
                {
                    image === null ? <Field>
                        <Label className="flex text-[12px] pb-2" aria-label={props.label}>{props.label}</Label>
                        <label className={InputStyle}>
                            <input type="file" name="file" onChange={fileHandler} className="hidden" accept="image/*" />
                            <div className="flex gap-2">
                                <ImageIcon width={18} height={18} />
                                <div className="text-[12px]">
                                    انتخاب عکس
                                </div>
                            </div>
                        </label>
                    </Field> :
                        <div>
                            <Image src={`/images/${image}`} alt="" width={139} height={139} /> 
                            <input type="hidden" name={props.name} value={image} />
                            <div className="w-[49px]">
                            <Button unStyle icon={<TrashBin width={13} height={13} color="rgb(248 113 113 / var(--tw-text-opacity, 1))" />} className="text-[12px] text-red-400" onPress={() => setImage(null)}>حذف</Button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default InputUploader;