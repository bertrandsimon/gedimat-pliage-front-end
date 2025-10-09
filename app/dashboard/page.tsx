
'use client'
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"
import { Dashboard } from "./dashboard"
import { generatePageMetadata } from "@/lib/seo"
import Top from '@/components/presentation/top'

// Note: Since this is a client component, we can't export metadata directly
// The metadata will be handled by the parent layout or we need to convert to server component

export default function DashboardPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-4 sm:px-12 py-6 sm:py-12">
                <Top
                    title="MON COMPTE"
                    subtitle="Espace client"
                    sliderOn={true}
                    imageTop=""
                ></Top>
            </div>
            <div className="grid grid-cols-2 px-12">
                <div className="col-span-1"></div>
                <div className="text-md col-span-1">      <p >
                    Votre espace de gestion de commandes
                </p></div>
            </div>
            <div className="px-4 sm:px-12 py-6 sm:py-12"><Dashboard /></div>

        </div>
    )
}