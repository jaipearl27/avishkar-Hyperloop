import React,{ useRef, useState }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Pods = () => {
  return (
    <>
      <div className="space-y-5">
        <img src="../../../public/images/podsBannerBg.png" alt="" className="h-screen mx-auto mt-[5rem]" />
        <div className="banner-content">
          <h1>Pods Technologies</h1>
          <p>Scalable technologies for the full scale vision</p>
        </div>
      </div>
      <div className='container-fluid mx-auto'>
        <div className="garudaPods text-center flex flex-col items-center gap-y-10">
          <h2 className="font-bold text-4xl">Pod 6.0 | Garuda</h2>
          <p>Avishkar has been working on Hyperloop pod technologies for over 6 years now, and has been working relentlessly to develop scalable and frugal technologies for the Indian Hyperloop. Avishkar's pod Garuda is propelled by a Linear induction Motor designed completely in-house, which is also the pod’s primary mode of braking. The pod incorporates bidirectional run capabilities and EMS levitation with a high lift-to-weight ratio while still being extremely power efficient. The pod is controlled with autonomous embedded systems capable of speed and direction control and real-time data acquisition. This technological marvel will soon be tested inside our very own 400m vacuum tube facility, thereby proving the concept of Hyperloop.</p>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className="podsSchematics text-center flex flex-col items-center gap-y-10">
          <h2 className="font-bold text-4xl">Pod Schematics</h2>
          <div className="schematicsSlider">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <div className="slioder-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pods;
