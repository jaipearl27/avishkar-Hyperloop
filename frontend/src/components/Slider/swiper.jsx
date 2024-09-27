import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// import required modules
import { Pagination } from 'swiper/modules';

const swiper = ({slides}) => {
  return (
    <>
     <Swiper pagination={true} modules={[Pagination]} navigation={true} className="mySwiper">
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
