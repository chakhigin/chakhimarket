"use client";
import { Basket, HomeAlt1, Person, Pin, SettingsHorizontal, ShippingBoxV1, Wallet } from "akar-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {

    const pathname = usePathname();

    return (
        <div className="fixed right-0 top-[58px] w-full max-w-52 h-[100vh] bg-[#ebebeb] border-l border-l-[var(--border-color)]">
            <nav>
                <div className="w-full h-full">
                    <div className="flex flex-col px-3 py-12 gap-3">
                        <Link className={`w-full flex gap-2 p-3 py-2 rounded-md ${pathname === "/admin" ? "bg-[#fafafa]" : ""}`} href="/admin">
                            <HomeAlt1 width={18} height={18} />
                            <span className="flex text-[12px]">خانه</span>
                        </Link>
                        <Link className={`w-full flex gap-2 p-3 py-2 rounded-md ${pathname === "/admin/orders" ? "bg-[#fafafa]" : ""}`} href="/admin/orders">
                            <ShippingBoxV1 width={19} height={19} />
                            <span className="flex text-[12px]">سفارشات</span>
                        </Link>
                        <Link className={`w-full flex gap-2 p-3 py-2 rounded-md ${pathname === "/admin/product" || pathname === "/admin/product/new" ? "bg-[#fafafa]" : ""}`} href="/admin/product">
                            <Basket width={19} height={19} />
                            <span className="flex text-[12px]">محصولات</span>
                        </Link>
                        <Link className={`w-full flex gap-2 p-3 py-2 rounded-md ${pathname === "/admin/category" ? "bg-[#fafafa]" : ""}`} href="/admin/category">
                            <Wallet width={19} height={19} />
                            <span className="flex text-[12px]">دسته بندی ها</span>
                        </Link>
                        <Link className={`w-full flex gap-2 p-3 py-2 rounded-md ${pathname === "/admin/tag" ? "bg-[#fafafa]" : ""}`} href="/admin/tag">
                            <Pin width={19} height={19} />
                            <span className="flex text-[12px]">برچسب ها</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideBar;