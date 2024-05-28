"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import 'swiper/css';
import 'swiper/scss';
import '@/public/styles/effect-material.css';
import '@/public/styles/index.css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function MaterialSlider() {
  useEffect(() => {
    import('swiper').then((Swiper) => {
      import('@/public/scripts/effect-material.esm').then((EffectMaterial) => {
        const swiper = new Swiper.default('.swiper', {
          modules: [EffectMaterial.default],
          effect: 'material',
          // materialEffect: {
          //   slideSplitRatio: 0.65,
          // },
          grabCursor: true,
          slidesPerView: 2,
          spaceBetween: 16,
          speed: 600,
          // autoplay: {
          //   delay: 1000, // Set the autoplay delay in milliseconds (3 seconds in this example)
          // },
          // navigation: {
          //   prevEl: '.swiper-button-prev', // CSS selector for the previous button
          //   nextEl: '.swiper-button-next', // CSS selector for the next button
          // },
        });
      });
    });
  }, []);

  return (
    <div id="app">

      <div className="demo-slider">
        <div className="swiper">
          <div className="swiper-wrapper max-h-36">
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 1"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi1.jpg"
                  />
                  
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 2"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi2.jpg"
                  />
                  
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 3"
                    width={100}
                    height={100}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi3.jpg"
                  />
                 
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 4"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi4.jpg"
                  />
              
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 5"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi5.jpg"
                  />
                
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 6"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi6.jpg"
                  />
                 
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 7"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi7.jpg"
                  />
               
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 8"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi8.jpg"
                  />
                
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 9"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi9.jpg"
                  />
                 
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-material-wrapper">
                <div className="swiper-material-content">
                  <Image
                    alt="Slide 10"
                    width={200}
                    height={200}
                    className="demo-material-image"
                    data-swiper-material-scale="1.25"
                    src="/images/swiper/inspi10.jpg"
                  />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
