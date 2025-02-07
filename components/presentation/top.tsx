import Image from 'next/image'

export default function Top(props: any) {
  const sliderOn = props.sliderOn
  console.log(props)
  return (
    <div
      className="flex justify-center items-center rounded-t-lg bg-cover bg-no-repeat h-[274px] "
      style={{ backgroundImage: "url('/images/top/slide1.jpg')" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 pr-1 sm:pt-0 select-none ">
        <div className="mt-24 sm:col-span-1 flex flex-col justify-end sm:justify-end items-end order-2 sm:order-1">
          {sliderOn && (
            <Image
              src={`/images/top/${props.imageTop}`}
              width={379}
              height={278}
              alt=""
            />
          )}
        </div>

        {/* desktop */}
        <div className="hidden sm:visible sm:col-span-2 sm:flex justify-center items-center flex-col sm:mb-0 sm:order-2">
          <div className="flex flex-col gap-2">
            <div className="font-medium text-2xl py-1 px-2 min-w-full bg-white">
              {props.title}
            </div>
            <div className="font-medium text-4xl text-white">
              {props.subtitle}
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="sm:hidden 2 flex justify-end text-center items-center flex-col h-40 order-1 pt-10">
          <div>
            <div className="font-medium">{props.title}</div>
            <div className="font-medium text-3xl text-white">
              {props.subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
