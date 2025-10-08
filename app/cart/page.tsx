
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb"
import Cart from "./cart"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata('cart')

export default function CartPage() {

    return (
        <div>
            <DynamicBreadcrumb />
            <div className="px-4 sm:px-12 py-6 sm:py-12"><Cart /></div>

        </div>
    )
}