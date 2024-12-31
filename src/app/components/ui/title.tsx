
interface TitleProps{
    children: React.ReactNode,
}

function Title(props:TitleProps){
    return(
        <div className="text-[14px]">
            {props.children}
        </div>
    )
}

export default Title;