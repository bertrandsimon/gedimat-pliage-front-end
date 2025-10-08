import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata('dashboard')

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
