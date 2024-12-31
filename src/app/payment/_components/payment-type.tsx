"use client";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react';

const payment_type = ["پرداخت در محل"];

function PaymentType() {

    let [selected, setSelected] = useState(payment_type[0]);

    return (
        <div className="pt-2">
            <RadioGroup value={selected} onChange={setSelected} aria-label="Payment Type">
                {payment_type.map((peyment) => (
                    <Field key={peyment} className="flex items-center gap-2 pb-2 last:pb-0">
                        <Radio
                            value={peyment}
                            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-[#fff]"
                        >
                            <span className="invisible size-3 rounded-full bg-[#000] group-data-[checked]:visible" />
                        </Radio>
                        <Label className="text-[13px]">{peyment}</Label>
                    </Field>
                ))}
            </RadioGroup>
        </div>
    )
}

export default PaymentType;