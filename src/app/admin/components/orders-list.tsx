"use client";
import Button from "@/app/components/ui/button";
import { ModalContext } from "@/app/context/modalContext";
import { Order, Product } from "@prisma/client";
import { Edit, EyeOpen } from "akar-icons";
import { useActionState, useContext, useState } from "react";
import ShowOrder from "./show-order";
import ListBox from "@/app/components/ui/listbox";
import { UpdateOrder } from "@/app/action/order/update";
import EditOrder from "./edit-order";
import Pagination from "./pagination";

interface OrdersListProps {
    orders: Order[]
}

function OrdersList(props: OrdersListProps) {

    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState("");
    const { setOpenModal } = useContext(ModalContext);

    const editButton = (id:string) => {
        setOrderId(id);
        setOpenModal(true);
    }

    const handleOrder = (order: any) => {
        setOpenModal(true);
        setOrder(order);
    }

    if (props.orders.length === 0) {
        return (
            <div className="flex flex-col items-center justift-center mt-4 mb-4">
                <div className="text-[14px]">
                    سفارشی نداشتید
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex items-center w-full">
                <div className="flex flex-col w-full">
                    {props.orders.map((order, index) => (
                        <div className="flex items-center justify-between w-full border-b border-b-[var(--border-color)] p-3 last:border-none last:pb-0" key={order.id}>
                            <div>
                                <span className="text-[12px]">
                                    {index + 1}
                                </span>
                            </div>
                            <div className="w-52 max-w-52">
                                <span className="text-[12px] line-clamp-1">{order.id}</span>
                            </div>
                            <div className="w-52 max-w-52">
                                <span className="text-[12px] line-clamp-1">{order.orderstatus}</span>
                            </div>
                            <div className="flex items-center gap-8">
                                <div>
                                    <Button unStyle icon={<Edit width={15} height={15} color="#898989" />} className="text-[12px] text-[#898989]" onPress={() => editButton(order.id)}>ویرایش</Button>
                                </div>
                                <div>
                                    <Button unStyle icon={<EyeOpen width={19} height={19} color="#898989" />} className="text-[12px] text-[#898989]" isLink href={`/admin/orders/${order.id}`}>
                                        مشاهده سفارش
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Pagination items={props.orders}/>
                </div>
            </div>
            <EditOrder orderId={orderId} />
        </div>
    )
}

export default OrdersList;