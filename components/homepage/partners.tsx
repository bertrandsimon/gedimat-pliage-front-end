import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import partner1 from '@/public/images/partners/partner1.jpg'
import partner2 from '@/public/images/partners/partner2.jpg'
import partner3 from '@/public/images/partners/partner3.jpg'
import partner4 from '@/public/images/partners/partner4.jpg'
import partner5 from '@/public/images/partners/partner5.jpg'

export default function Partners() {
  return (
    <>
      {/* <Swiper
        style={{ height: "120px" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        observer={true}
        observeParents={true}
        //  autoplay={{
        //   "delay": 5000,
        //   "disableOnInteraction": false
        // }}
      >
        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/1.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/2.png"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/3.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/4.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/5.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/6.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/7.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/8.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/9.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/10.png"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/11.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/12.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/13.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/14.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/15.jpg"
            alt="Mecotec"
            width={216}
            height={68}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/images/logos/16.jpg"
            alt="CapSix"
            width={216}
            height={68}
          />
        </SwiperSlide>
      </Swiper> */}

      <div className="flex gap-6 mb-20">
        <div className="grayscale hover:grayscale-0 cursor-pointer flex justify-center items-center  ">
          <Image src={partner1} alt="" width={85} height={94} />
        </div>
        <div className="grayscale hover:grayscale-0 cursor-pointer flex justify-center items-center">
          <Image src={partner2} alt="" width={190} height={55} />
        </div>
        <div className="grayscale hover:grayscale-0 cursor-pointer flex justify-center items-center">
          <Image src={partner3} alt="" width={173} height={40} />
        </div>
        <div className="grayscale hover:grayscale-0 cursor-pointer flex justify-center items-center -mt-4">
          <Image src={partner4} alt="" width={176} height={41} />
        </div>
        <div className="grayscale hover:grayscale-0 cursor-pointer flex justify-center items-center -mt-2">
          <Image src={partner5} alt="" width={205} height={32} />
        </div>
      </div>
    </>
  )
}
