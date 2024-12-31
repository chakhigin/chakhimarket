import type { Metadata } from "next";
import Layout from "../components/ui/layout";
import BottomHeader from "../components/bottomHeader";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Layout>
                <div>
                    {children}
                    <BottomHeader />
                </div>
            </Layout>
        </main>
    );
}
