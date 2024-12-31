"use client";
import { useQueryState } from 'nuqs'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react';
import { ChevronDown } from 'akar-icons';


const OrderItems = [
    { name: "ارزان ترین", value: "asc" },
    { name: "گران ترین", value: "desc" }
]

function FilterProducts() {

    const [orderBy, setOrderBy] = useQueryState("orderBy", {
        parse: (value) => value || "",
        shallow: false
    })
    const [order, setOrder] = useState(OrderItems[0]);

    const handleChange = (value:any) => {
        setOrderBy(value.value);
        setOrder(value);
    }

    const InputStyle = "flex items-center w-[109px] h-[25px] pt-4 pb-4 px-2 border-[.0625rem] border-[#000] rounded-md text-[14px] text-[13px]"

    return (
        <div className="px-8 pt-6">
            <Listbox value={order} onChange={(value) => handleChange(value)}>
                <ListboxButton className={InputStyle}>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            {order.name}
                        </div>
                        <ChevronDown width={13} height={13}/>
                    </div>
                </ListboxButton>
                <ListboxOptions anchor="bottom" className="w-[var(--button-width)] mt-1 rounded-md border-[.0625rem] border-[#000] bg-[#fff]">
                    {OrderItems.map((item) => (
                        <ListboxOption key={item.name} value={item} className="p-2 text-[12px] border-b border-b-[var(--border-color)] last:border-b-0 data-[focus]:bg-blue-100">
                            {item.name}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default FilterProducts;