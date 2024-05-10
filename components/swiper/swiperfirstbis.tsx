
"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Fragment } from "react"
import img1 from "@/public/images/swiper/01.jpg"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import EffectMaterial from '@/public/scripts/effect-material.esm'
import '@/public/styles/effect-material.scss';
import '@/public/styles/main.scss';
// import './main.scss';

 import 'swiper/css';
 import "@/public/styles/effect-material.min.css"

export default function Swiperfirstbis() {


  
  return (
  
 <>
    <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectMaterial]}
        effect="material"
        className="swiper-material" 
      >
        <SwiperSlide><Image src={img1} alt="" data-swiper-material-scale="1.25" /></SwiperSlide>
        <SwiperSlide><Image src={img1} alt="" data-swiper-material-scale="1.25" /></SwiperSlide>
        <SwiperSlide><Image src={img1} alt="" data-swiper-material-scale="1.25" /></SwiperSlide>
        <SwiperSlide><Image src={img1} alt="" data-swiper-material-scale="1.25" /></SwiperSlide>
      </Swiper>
 </>
  
  
  )
}
