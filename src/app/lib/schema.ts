import { z } from "zod";

export const ProductSchema = z.object({
    name: z
    .string({ required_error: "نام محصول لازم هست" })
    .trim()
    .min(1, { message: "نام محصول خیلی کوتاه است" })
    .max(140, { message: "نام محصول خیلی طولانی هست" }),
    price: z
    .string({ required_error: "قیمت محصول لازم هست" })
    .trim()
    .min(1, { message: "قیمت محصول کوتاه هست" }),
    inStock:z
    .number({required_error: "موجودی لازم هست"})
    .min(1,{message:"موجودی خیلی کوتاه هست"}),
    image: z
    .any()
    .refine((file: any) => file?.length >= 1, "یک عکس برای محصول بذارید")
});

export const SliderSchema = z.object({
    link:z
    .string({required_error: "یک لینک انتخاب کنید"})
    .trim()
    .min(1, {message: "لینک بنر خیلی کوتاه هست"}),
    image: z
    .any()
    .refine((file: any) => file?.length >= 1, "یک عکس برای بنر انتخاب کنید")
})

export const AccountSchema = z.object({
    name: z
    .string({ required_error: "نام کاربری لازم هست" })
    .trim()
    .min(1, { message: "نام کاربری خیلی کوتاه هست" })
    .max(40, { message: "نام کاربری خیلی طولانی هست" }),
    email: z
    .string({required_error: "ایمیل لازم هست"})
    .trim()
    .min(1,{message: "ایمیل خیلی کوتاه هست"})
    .email({message:"ایمیل معتبر نیست"}),
    phone: z
    .string({required_error:"شماره موبایل لازم هست"})
    .min(1,{message:"شماره موبایل خیلی کوتاه هست"})
})