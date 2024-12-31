"use client";
import CreatePayment from "@/app/action/payment/create";
import SubmitButton from "@/app/components/ui/submitButton";
import { CartContext } from "@/app/context/cartContext";
import { UserAddress } from "@/app/context/userAddress";
import UserLoggedIn from "@/app/lib/user-logged";
import { FormatNumber } from "@/app/utils/formatNumber";
import { redirect } from "next/navigation";
import { useActionState, useContext } from "react";
import { toast } from "sonner";

function SubmitPayment() {

    const { cart, cartTotal,removeCart } = useContext<any>(CartContext);
    const {addressId} = useContext<any>(UserAddress);
    const {user} = UserLoggedIn();

    const [data,createPayment] = useActionState(CreatePayment,null);

    console.log(data);

    const HandleSubmitPayment = () => {
        if(data?.status === "success"){
            removeCart();
            toast.success("سفارش شما ثبت شد");
            redirect("/");
        }else{
            toast.error("سفارش شما ثبت نشد");
        }
    }

    return (
        <div>
            <div className="fixed bottom-0 w-full max-w-[576px] px-8 py-4 translate-x-0 bg-[#fff] border-t border-t-[var(--border-color)]">
                <div>
                    مجموع خرید: {FormatNumber(cartTotal())} تومان
                </div>
                <div>
                    <form action={createPayment}>
                        <input type="hidden" name="user-id" value={user?.user.id} />
                        <input type="hidden" name="products" value={JSON.stringify(cart)} />
                        <input type="hidden" name="user-address" value={addressId} />
                        <input type="hidden" name="payment-type" value="پرداخت در محل" />
                        <input type="hidden" name="order-status" value="ثبت سفارش" />
                        <SubmitButton full onPress={HandleSubmitPayment}>
                            پرداخت
                        </SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitPayment;