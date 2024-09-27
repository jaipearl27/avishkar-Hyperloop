import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

const swiper = ({slides}) => {
  return (
    <>
     <Swiper slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default swiper
