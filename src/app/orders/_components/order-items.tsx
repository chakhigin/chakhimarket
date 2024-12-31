import { Order } from "@prisma/client";
import { Hashtag } from "akar-icons";

interface OrderItemsProps {
    orders: Order[]
}

function OrderItems(props: OrderItemsProps) {

    console.log(props.orders);

    return (
        <div className="pt-6 pb-20">
            {props.orders.map((order, index) => (
                <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-b-[var(--border-color)] last:border-b-0 last:pb-3 last:mb-3" key={order.id}>
                    <div className="flex items-center gap-2">
                        <div>
                            <div className="text-[10px] pb-2">
                                شماره سفارش
                            </div>
                            <div className="text-[13px]">
                                <div className="flex gap-1">
                                    <Hashtag width={14} height={14} />
                                    <div className="relative">{order.id.slice(30)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] pb-2">
                            وضعیت سفارش
                        </div>
                        <div className="text-[13px]">
                            {order.orderstatus}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderItems;