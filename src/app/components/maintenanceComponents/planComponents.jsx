
export default function PlanComponents({ planComp }) {

    const [listOne, listOneBody, listTwo, listTwoBody, listThree, listThreeBody] = planComp;

    return (
        <details>
            <summary>{listOne}</summary>
            <p>{listOneBody}</p>
            <summary>{listTwo}</summary>
            <p>{listTwoBody}</p>
            <summary>{listThree}</summary>
            <p>{listThreeBody}</p>
        </details>
    )
}
