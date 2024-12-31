import type { Metadata } from "next";
import Layout from "../components/ui/layout";
import BottomHeader from "../components/bottomHeader";
import PageHeader from "../components/pageHeader";

export const metadata: Metadata = {
    title: "سفارش های شما",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <div>
                <PageHeader title="سفارشات" backIcon={true} backHref="/" />
                {children}
                <BottomHeader />
            </div>
        </Layout>
    );
}
