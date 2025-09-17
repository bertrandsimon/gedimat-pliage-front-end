
'use client'
import Ariane from "@/components/ariane"
import { Dashboard } from "./dashboard"


export default function DashboardPage() {

    const ariane = {
        sub1: "Dashboard",
        sub2: "",
        sub3: "",
    }

    return (
        <div>
            <Ariane ariane={ariane} />
            <div className="px-12 py-12"><Dashboard /></div>

        </div>
    )
}