import Contact from "./contact"
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata('contact')

export default function ContactPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-4 sm:px-12 py-6 sm:py-12"><Contact /></div>

        </div>
    )
}