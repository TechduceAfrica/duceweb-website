
export function Body({ text }) {
    return (
        <p dangerouslySetInnerHTML={{__html: text}}>
        </p>
    )
}

export function NormalBody({ text }) {
    return (
        <p>
            {text}
        </p>
    )
}
