"use client";

import ListBox from "@/app/components/ui/listbox";
import { Tag as TagDB } from "@prisma/client";
import { useEffect, useState } from "react";

interface TagProps {
    id?: any,
    items: TagDB[],
    name: string
}

function Tag(props: TagProps) {

    const [itemIndex, setItemIndex] = useState(0);
    const [listBoxLoading, setListBoxLoading] = useState(true);

    useEffect(() => {
        if (props.id === undefined) {
            setItemIndex(0);
            setListBoxLoading(false);
        }
        else {
            const listItemIndex = props.items.findIndex((item) => item.id === props.id);
            setItemIndex(listItemIndex);
            setListBoxLoading(false)
        }
    }, [itemIndex])

    return (
        <div>
            {!listBoxLoading && <ListBox items={props.items} selectedIndex={0} name={props.name} label="برچسب" paddingTop />}
        </div>
    )
}

export default Tag;