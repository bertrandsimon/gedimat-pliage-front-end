
'use client'
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"
import { Dashboard } from "./dashboard"
import { generatePageMetadata } from "@/lib/seo"

// Note: Since this is a client component, we can't export metadata directly
// The metadata will be handled by the parent layout or we need to convert to server component

export default function DashboardPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-4 sm:px-12 py-6 sm:py-12"><Dashboard /></div>

        </div>
    )
}