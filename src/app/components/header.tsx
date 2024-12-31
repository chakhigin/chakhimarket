import { Search } from "akar-icons";
import Link from "next/link";
import Button from "./ui/button";
import Logo from "./logo";

function Header() {
    return (
        <header>
            <div className="flex items-center w-full h-[59px] bg-[#DCBFFF]">
                <div className="w-full flex items-center justify-between px-8">
                    <div><Logo /></div>
                    <div className="flex items-center">
                        {/* <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fff]">
                            <Link href="/search"><Search width={20} height={20}/></Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;