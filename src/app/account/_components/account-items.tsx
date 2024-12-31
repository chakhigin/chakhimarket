"use client";
import { UserContext } from "@/app/context/userContext";
import { authClient } from "@/app/lib/auth-client";
import { ChevronLeft, Pin, SettingsHorizontal, ShippingBoxV1, SignOut } from "akar-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function AccountItems() {

    const {setIsUser,setUser} = useContext(UserContext);
    const router = useRouter();

    const logOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    setIsUser(false);
                    setUser(null);
                },
            },
        });
    }

    return (
        <div className="px-8 pt-14">
            <div className="flex flex-col">
                <Link href="/account/settings">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-b-[var(--border-color)]">
                        <div className="flex items-center gap-2 text-[14px]">
                            <SettingsHorizontal width={20} height={20} />
                            <span>تنظیمات</span>
                        </div>
                        <div>
                            <ChevronLeft width={20} height={20} />
                        </div>
                    </div>
                </Link>
                <Link href="/account/address">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-b-[var(--border-color)]">
                        <div className="flex items-center gap-2 text-[14px]">
                            <Pin width={20} height={20} />
                            <span>آدرس های من</span>
                        </div>
                        <div>
                            <ChevronLeft width={20} height={20} />
                        </div>
                    </div>
                </Link>
                <Link href="/orders">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-b-[var(--border-color)]">
                        <div className="flex items-center gap-2 text-[14px]">
                            <ShippingBoxV1 width={20} height={20} />
                            <span>سفارش های من</span>
                        </div>
                        <div>
                            <ChevronLeft width={20} height={20} />
                        </div>
                    </div>
                </Link>
                <div className="cursor-pointer" onClick={logOut}>
                    <div className="flex items-center justify-between mb-6 pb-6">
                        <div className="flex items-center gap-2 text-[14px] text-red-500">
                            <SignOut width={20} height={20} />
                            <span>خروج از حساب کاربری</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountItems;