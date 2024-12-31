import { Category, Order, Product, Tag } from "@prisma/client";
import { ChevronLeft, ChevronRight } from "akar-icons";
import { useQueryState } from "nuqs";

interface PaginationProps {
    items: Product[] | Category[] | Tag[] | Order[]
}

function Pagination(props: PaginationProps) {

    const [page, setPage] = useQueryState("page", {
        defaultValue: 0,
        parse: (value: any) => value || "",
        shallow: false
    })

    const handlePerviousPage = () => {
        if (page === 0) return;
        setPage(parseInt(page) - parseInt("1"))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handleShowNextPage = () => {
        if (props.items.length === 10) {
            setPage(parseInt(page) + parseInt("1"))
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } else {
            return;
        }
    }

    return (
        <div className="pt-6">
            <div className="flex items-center gap-3">
                <div onClick={handlePerviousPage} className={`${page === 0 ? "text-[#898989]" : " cursor-pointer"}`} aria-disabled={page === 0}>
                    <ChevronRight width={18} height={18} />
                </div>
                <div className="flex items-center justify-center w-2 text-[13px]">
                    {page === 0 ? 1 : page + 1}
                </div>
                <div onClick={handleShowNextPage} className={`${props.items.length === 10 ? "cursor-pointer" : "text-[#898989]"}`} aria-disabled={true}>
                    <ChevronLeft width={18} height={18} />
                </div>
            </div>
        </div>
    )
}

export default Pagination;