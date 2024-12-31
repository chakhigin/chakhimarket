import Logo from "@/app/components/logo";
import { Person } from "akar-icons";

function Header() {
    return (
        <header className="fixed top-0 right-0 w-full h-[58px] bg-[rgba(59,59,59,1)]">
            <div className="flex items-center justify-between px-20 pt-1">
                <Logo color="#fff" />
                <div className="flex items-center gap-3">
                    <div>

                    </div>
                    <div>
                        <Person color="#fff" width={19} height={19}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;