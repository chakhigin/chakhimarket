import PageHeader from "../components/pageHeader";
import Title from "../components/ui/title";
import { Auth } from "../lib/auth-user";
import { prisma } from "../lib/db";
import Address from "./_components/address";
import Cart from "./_components/cart";
import PaymentType from "./_components/payment-type";
import SubmitPayment from "./_components/submit-payment";

async function page(){

    const user = await Auth();

    const address = await prisma.address.findMany({
        where:{
            userId:user?.user.id
        }
    })

    return(
        <div>
            <PageHeader title="تکمیل سفارش" backIcon={true} backHref="/cart" />
            <div className="px-8 pt-16">
                <div className="mb-6 pb-6 border-b-2 border-b-[var(--border-color)]">
                    <Title>انتخاب آدرس</Title>
                    <Address user={user} address={address}/>
                </div>
                <div className="mb-6 pb-6 border-b-2 border-b-[var(--border-color)]">
                    <Title>انتخاب شیوه پرداخت</Title>
                    <PaymentType />
                </div>
                <div className="mb-6 pb-6">
                    <Title>سبد خرید</Title>
                    <Cart />
                </div>
            </div>
            <SubmitPayment/>
        </div>
    )
}

export default page;