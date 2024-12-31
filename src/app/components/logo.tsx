
interface LogoProps{
    color?:string,
}

function Logo(props:LogoProps){
    return(
        <div className="flex items-center">
            <div className={`text-[14px] font-bold ${props.color ? `text-[${props.color}]` : ""}`} style={{fontFamily:"var(--font-iranyekaniran)"}}>
                چخی
                <div><span className="text-[18px]">مارکت</span></div>
            </div>
        </div>
    )
}

export default Logo;