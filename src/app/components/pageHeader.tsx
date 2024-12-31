import { ArrowRight } from "akar-icons";
import Link from "next/link";

interface PageHeaderProps {
    title: string,
    subTitle?: string,
    backToHome?: boolean,
    backHref?: string,
    backIcon?: boolean
}

function PageHeader(props: PageHeaderProps) {
    return (
        <header>
            <div className="flex items-center">
                <div className="flex items-center bg-[#fff] w-full h-[59px] border-b border-b-[var(--border-color)] px-8">
                    <div className="flex items-center gap-2">
                        <Link href={`${props.backToHome ? "/" : props.backHref}`}><ArrowRight width={21} height={21}/></Link>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[14px]">
                                {props.backIcon && <span>{props.title}</span>}
                            </div>
                            {props.subTitle && <div className="text-[12px]">
                                {props.subTitle}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;