"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function PromoSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide><img src="/img/banners/slider1.webp" alt="slider1" className='md:h-[500px] w-[1800px]' /></SwiperSlide>
      <SwiperSlide><img src="/img/banners/slider2.webp" alt="slider2" className='md:h-[500px] w-[1800px]' /></SwiperSlide>
      <SwiperSlide><img src="/img/banners/slider3.webp" alt="slider3" className='md:h-[500px] w-[1800px]' /></SwiperSlide>
    </Swiper>
  );
}
