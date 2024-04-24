
export default function Body({ text }) {
    return (
        <p dangerouslySetInnerHTML={ {__html: text}}>
        </p>
    )
}
