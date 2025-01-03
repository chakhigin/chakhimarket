import type { Metadata } from "next";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import { Auth } from "../lib/auth-user";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const isUser = await Auth();

    if(!isUser){
        return redirect("/login");
    }

    return (
        <div>
            <Header />
            <div className="w-full h-screen bg-[var(--background-color)] rounded-tl-md rounded-tr-md">
                <SideBar />
                <div className="bg-[var(--background-color)]">
                    <div className="w-full">
                        <div className="flex">
                            <div className="w-full h-screen px-24 pt-28 mt-2">
                                <div className="max-w-4xl m-auto">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
