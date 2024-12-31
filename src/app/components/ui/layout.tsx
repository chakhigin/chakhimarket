
interface LayoutProps{
    children:React.ReactNode
}

function Layout(props:LayoutProps){
    return(
        <div className="max-w-xl h-screen m-auto bg-[var(--background-color)]">
            {props.children}
        </div>
    )
}

export default Layout;