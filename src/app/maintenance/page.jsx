import { Cards, HeroCopy } from "@/webCopy/maintenancePageCopy";
import MaintenanceComponents from "../components/maintenanceComponents";


export default function MaintenancePage() {
    return (
        <main>
            <MaintenanceComponents topic={HeroCopy.topic} subTopic={HeroCopy.subTopic} Cards={Cards} />
        </main>
    )
}
