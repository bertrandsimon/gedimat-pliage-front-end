import MagicLinkRequest from '@/components/user/magicLinkRequest'
import DynamicBreadcrumb from '@/components/dynamic-breadcrumb'

export default function MagicLinkPage() {
    return (
        <div>
            <DynamicBreadcrumb />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <MagicLinkRequest />
            </div>
        </div>
    )
}
