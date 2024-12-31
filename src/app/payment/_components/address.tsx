"use client";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useContext, useEffect, useState } from 'react';
import { Address as DBAddress } from "@prisma/client";
import { UserAddress } from '@/app/context/userAddress';

interface AddressProps {
    user?: any,
    address: DBAddress[]
}

function Address(props: AddressProps) {

    const {setAddressId} = useContext<any>(UserAddress);
    const [selected, setSelected] = useState(props.address[0]);

    const handleChange = (value:any) => {
        setSelected(value);
        setAddressId(value.id);
    }

    useEffect(() => {
        setAddressId(selected?.id)
    },[selected])

    if (props.address?.length === 0) {
        return (
            <div className="pt-2 text-[13px]">
                هنوز آدرسی ثبت نکردید
            </div>
        )
    }

    return (
        <div className="pt-2">
            <RadioGroup value={selected} onChange={(value) => handleChange(value)} aria-label="Address">
                {props.address?.map((item:any, index:any) => (
                    <Field key={item.id} className="flex items-center gap-2 pb-2 last:pb-0">
                        <Radio
                            value={item}
                            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-[#fff]"
                        >
                            <span className="invisible size-3 rounded-full bg-[#000] group-data-[checked]:visible" />
                        </Radio>
                        <Label className="text-[13px]">{item.address}, پلاک: {item.housenumber}, زنگ: {item.ring}</Label>
                    </Field>
                ))}
            </RadioGroup>
        </div>
    )
}

export default Address;