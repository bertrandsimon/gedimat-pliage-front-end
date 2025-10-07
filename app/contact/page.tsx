import Contact from "./contact"
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"

export default function ContactPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-12 py-12"><Contact /></div>

        </div>
    )
}