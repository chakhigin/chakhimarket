
interface ErrorMessageProps {
    content: any
}

function ErrorMessage(props: ErrorMessageProps) {
    return (
        <div>
            {props.content && <div className="flex items-center pt-2 text-[12px] text-red-500">
                {props.content}
            </div>}
        </div>
    )
}

export default ErrorMessage;