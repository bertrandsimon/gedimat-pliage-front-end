
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"
import Cart from "./cart"

export default function CartPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-12 py-12"><Cart /></div>

        </div>
    )
}