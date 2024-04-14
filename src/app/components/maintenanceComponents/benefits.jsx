
export default function BenefitsList({ Benefits }) {
    return (
        <ul>
            {Benefits.map(( benefit, index ) => {
                <li key={index}>
                    {benefit.list}
                </li>
            })}
        </ul>
    )
}
