
interface CardProps{
    children:React.ReactNode,
}

function Card(props:CardProps){

    return(
        <div className="w-full h-full">
            <div className="bg-[#fff] border-[1px] border-[var(--border-color)] rounded-md shadow-card-shadow">
                <div className="p-8">
                    {props.children}
                </div>
            </div>
        </div>            
    )
}

export default Card;