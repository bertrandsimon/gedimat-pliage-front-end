'use client'

import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function PrintButton() {
    const params = useParams()

    const handlePrint = () => {
        const printUrl = `/dashboard/singleList/${params.id}/print`
        window.open(printUrl, '_blank', 'toolbar=no,menubar=no,scrollbars=yes,resizable=yes,width=1200,height=800')
    }

    return (
        <Button
            onClick={handlePrint}
            className="uppercase redBtn flex items-center gap-2"
        >
            <FileText className="h-4 w-4" />
            VERSION IMPRIMABLE
        </Button>
    )
}

