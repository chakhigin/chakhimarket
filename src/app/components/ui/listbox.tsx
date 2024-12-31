"use client";
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDown } from 'akar-icons';
import React, { useEffect, useState } from 'react';

interface ListBoxProps{
    items:any,
    selectedIndex:any,
    name:string,
    label?:string,
    paddingTop?:boolean
}

function ListBox(props:ListBoxProps) { 
    const [selectedItem,setSelectedItem] = useState(props.items[props.selectedIndex]) 
    
    const InputStyle = "flex items-center w-full h-[25px] pt-4 pb-4 px-3 bg-[#fafafe] border-[.0625rem] border-[#abb] rounded-md text-[12px] text-[13px]"

    if(props.items.length === 0){
        return <div className="pb-5"><div className={InputStyle}>گزینه ای وجود ندارد</div></div>
    }

    return (
        <div className={props.paddingTop ? "pt-5" : "pt-0"}>
            <Field>
                {props.label && <Label className="flex text-[12px] mb-2">{props.label}</Label>}
                <Listbox value={props.items[props.selectedIndex]} onChange={setSelectedItem} >
                    <ListboxButton className={InputStyle}>
                        <div className="flex items-center justify-between w-full">
                            <span className="text-[12px]">{selectedItem.name}</span>
                            <ChevronDown width={18} height={18} />
                        </div>
                    </ListboxButton>
                    <ListboxOptions transition anchor="bottom start" className="w-[var(--button-width)] max-w-[830px] mt-1 bg-[#fff] border-[.0625rem] border-[#abb] rounded-md origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                        {props.items.map((item:any) => (
                            <ListboxOption key={item.id} value={item} className="text-[12px] p-3 cursor-pointer data-[focus]:bg-blue-100">
                                {item.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </Field>
            <input type="hidden" name={props.name} value={selectedItem.id.toString()} />
        </div>
    )
}

export default ListBox;