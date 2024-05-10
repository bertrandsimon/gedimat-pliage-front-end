
"use client"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Fragment } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "@/public/styles/effect-material.min.css"
import { useRef } from "react";

export default function Swiperfirst() {


  
  return (
  
 <>

<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image src="/images/swiper/1.jpg" alt="" width={330} height={202}/></SwiperSlide>
      <SwiperSlide><Image src="/images/swiper/2.jpg" alt="" width={209} height={202}/></SwiperSlide>
      <SwiperSlide><Image src="/images/swiper/3.jpg" alt="" width={111} height={202}/></SwiperSlide>
      <SwiperSlide><Image src="/images/swiper/1.jpg" alt="" width={330} height={202}/></SwiperSlide>
      <SwiperSlide><Image src="/images/swiper/2.jpg" alt="" width={209} height={202}/></SwiperSlide>
      <SwiperSlide><Image src="/images/swiper/3.jpg" alt="" width={111} height={202}/></SwiperSlide>
    </Swiper>

<Script src="/scripts/effect-material.min.js" />
<Script src="https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.js" />
 </>
  
  
  )
}
