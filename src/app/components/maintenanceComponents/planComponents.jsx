
export default function PlanComponents({ planComp }) {

    const { listOne, listOneBody, listTwo, listTwoBody, listThree, listThreeBody } = planComp;

    return (
        <>
            <details name="accordion">
                <summary>{listOne}</summary>
                <ul dangerouslySetInnerHTML={ {__html: listOneBody}}></ul>
            </details>
            <details name="accordion">
                <summary>{listTwo}</summary>
                <ul dangerouslySetInnerHTML={ {__html: listTwoBody}}></ul>
            </details>
            <details name="accordion">
                <summary>{listThree}</summary>
                <ul dangerouslySetInnerHTML={ {__html: listThreeBody}}></ul>
            </details>
        </>
    )
}
