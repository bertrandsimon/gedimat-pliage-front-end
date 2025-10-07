'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useBreadcrumb } from '@/hooks/use-breadcrumb'

interface DynamicBreadcrumbProps {
    customProductName?: string
    productCategory?: string
    productSubCategory?: string
}

export default function DynamicBreadcrumb({ customProductName, productCategory, productSubCategory }: DynamicBreadcrumbProps) {
    const breadcrumbs = useBreadcrumb(customProductName, productCategory, productSubCategory)

    return (
        <Breadcrumb className="sm:px-14">
            <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                    <div key={item.href} className="flex items-center">
                        <BreadcrumbItem>
                            {item.isLast ? (
                                <BreadcrumbPage className="font-medium text-foreground pb-2">
                                    {item.label}
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink
                                    href={item.href}
                                    className="relative group cursor-pointer transition-all duration-300 ease-out hover:text-[#B51B1B] pb-2 "
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B51B1B] to-[#FF6B6B] transition-all duration-500 ease-out group-hover:w-full"></span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B51B1B] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:w-full"></span>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {!item.isLast && <BreadcrumbSeparator />}
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
