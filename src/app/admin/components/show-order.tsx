import Card from "@/app/components/ui/card";
import Modal from "@/app/components/ui/modal";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ShowOrderProps {
    order: any
}

function ShowOrder(props: ShowOrderProps) {

    console.log(props.order);

    return (
        <div>
            <div className="text-[12px] pt-2 pb-2">
                آدرس مشتری
            </div>
            <div className="text-[12px]">
                {props.order[0].address.address}, پلاک: {props.order[0].address.housenumber}, زنگ: {props.order[0].address.ring}
            </div>
            <div className="text-[12px] pt-2 pb-2">
                نحوه پرداخت
            </div>
            <div className="text-[12px]">
                {props.order[0].paymentType}
            </div>
            {props.order[0]?.itemsordered?.product?.map((order: any, index: any) => (
                <div className="flex items-center justify-between gap-3 p-3 border-b border-b-[var(--border-color)] last:border-b-0 last:mb-0 last:pb-0" key={order.id}>
                    <div className="flex items-center gap-3">
                        <div>{index + 1}</div>
                        <div className="flex items-center justify-center w-[59px]">
                            <Image src={`http://localhost:3000/images/${order.image}`} alt={order.name} width={49} height={49} />
                        </div>
                        <div>
                            <div className="text-[13px] pb-1">
                                {order.name}
                            </div>
                            <div className="text-[11px] text-[#898989]">
                                دسته بندی: {order.category?.name}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[13px]">{order.qty} عدد</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowOrder;