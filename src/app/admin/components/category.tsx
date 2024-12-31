"use client";

import ListBox from "@/app/components/ui/listbox";
import { Category as CategoryDB, ParentCategory } from "@prisma/client";
import { useEffect, useState } from "react";

interface CategoryProps {
    id?: any,
    items: CategoryDB[] | ParentCategory[],
    name: string
}

function Category(props: CategoryProps) {

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
            {!listBoxLoading && <ListBox items={props.items} selectedIndex={itemIndex} name={props.name} label="دسته بندی" paddingTop />}
        </div>
    )
}

export default Category;