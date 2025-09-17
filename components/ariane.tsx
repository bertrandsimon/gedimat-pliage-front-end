import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function Ariane({ ariane }: any) {
  //console.log(props)

  return (
    <Breadcrumb className="sm:px-14">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="relative group cursor-pointer transition-all duration-300 ease-out hover:text-[#B51B1B] pb-2 hover:scale-105"
          >
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B51B1B] to-[#FF6B6B] transition-all duration-500 ease-out group-hover:w-full group-hover:shadow-lg group-hover:shadow-[#B51B1B]/30"></span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B51B1B] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:w-full blur-sm"></span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="relative group cursor-pointer transition-colors duration-200 hover:text-[#B51B1B] pb-2"
            href={ariane.link1}
          >
            {ariane.sub1}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B51B1B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {ariane.sub2 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="relative group cursor-pointer transition-colors duration-200 hover:text-[#B51B1B] pb-2"
                href={ariane.link2}
              >
                {ariane.sub2}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B51B1B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {ariane.sub3 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="relative group cursor-pointer transition-colors duration-200 hover:text-[#B51B1B] pb-2"
                href={ariane.link3}
              >
                {ariane.sub3}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B51B1B] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
