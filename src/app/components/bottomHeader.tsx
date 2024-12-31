import { Auth } from "../lib/auth-user";
import BottomHeaderItems from "./bottomHeaderItems";

function BottomHeader(){
    return(
        <div className="flex items-center fixed bottom-0 z-10 translate-x-0 translate-y-0 w-full max-w-[576px] h-[59px] border-t border-t-[var(--border-color)] px-8 bg-[#fff]">
            <BottomHeaderItems />
        </div>
    )
}

export default BottomHeader;