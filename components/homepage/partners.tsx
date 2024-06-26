import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

      <div className="w-full flex gap-2 justify-around items-center px-20 pb-20">
          <div className="grayscale hover:grayscale-0 cursor-pointer"><Image src={partner1} alt="" className="w-auto"/></div>
          <div className="grayscale hover:grayscale-0 cursor-pointer"><Image src={partner2} alt="" className="w-auto"/></div>
          <div className="grayscale hover:grayscale-0 cursor-pointer"><Image src={partner3} alt="" className="w-auto"/></div>
          <div className="grayscale hover:grayscale-0 cursor-pointer"><Image src={partner4} alt="" className="w-auto"/></div>
          <div className="grayscale hover:grayscale-0 cursor-pointer"><Image src={partner5} alt="" className="w-auto"/></div>
      </div>
      
    </>
  );
}
