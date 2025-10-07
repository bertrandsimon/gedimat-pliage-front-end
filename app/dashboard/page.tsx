
'use client'
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"
import { Dashboard } from "./dashboard"


export default function DashboardPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-12 py-12"><Dashboard /></div>

        </div>
    )
}