import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Accordions from '../../components/Accordions/Accordions';
import Footer from '../../components/Footer/footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';


const research = () => {
  const researchAccordionData = [
    {
      eventKey: "0",
      header: "Immersion Cooling",
      body: "Half-bridge IGBT based DC-DC converter to control the EMS with max power capability of 180 kVA. The vertical EMS (x4) is designed to lift 1240 N each at 13 A. The pod is also equipped with lateral EMS guidance which can provide lateral stability to the pod with just 6A current."
    },
    {
      eventKey: "1",
      header: "Microchannels",
      body: "Robust on-pod communication following CAN 2.0 protocol and a master-slave architecture that allows for time-controlled triggering of messages..."
    },
    {
      eventKey: "2",
      header: "Tube Optimization",
      body: "An impressive 3kWhr LFP battery pack assembled-in house with max pulse discharge current of 480A and unmatched abuse tolerance owing to cylindrical cells. The pack is integrated with a scalable BMS that ensures healthy operation of the cells. The pod is also equipped with IGBT based Inverter to power the DSLIM with max power capability of over 400 kVA. The inverter is used to generate 3-phase Sinusoidal Waveform from a DC Voltage to drive the Linear Induction Motor."
    },
    {
      eventKey: "3",
      header: "Socio Economic Aspects of Hyperloop Development",
      body: "The Double Sided Linear Induction Motor, which integrates v/f control technology, resulting in a remarkable 25% increase in acceleration performance. A PI controller is implemented to minimise steady state error. The pod primarily brakes via DC Injection Braking which imparts a substantial braking force of 0.4 kN. Mechanical friction brakes activate in the event of an emergency."
    },
    {
      eventKey: "4",
      header: "3 DOF Test Setup",
      body: "The chassis is a sandwich structure made of carbon fibre reinforced polymer layers (CFRP) with an Aluminium honeycomb core, making it lighter and durable - withstanding over 450 kg of load - being almost 2.4 times more optimised in weight. An inverted U shape chassis has been adopted to attain least possible deformations at critical air gaps, while maintaining a compact and space-efficient system."
    },
    {
      eventKey: "5",
      header: "Single Sided LIM",
      body: "The chassis is a sandwich structure made of carbon fibre reinforced polymer layers (CFRP) with an Aluminium honeycomb core, making it lighter and durable - withstanding over 450 kg of load - being almost 2.4 times more optimised in weight. An inverted U shape chassis has been adopted to attain least possible deformations at critical air gaps, while maintaining a compact and space-efficient system."
    },
  ];
  return (
    <>
      <div className="space-y-5 research-banner">
        <div className="banner-content">
          <h1>Research</h1>
          <p>Finding ways to realise this dream of Hyperloop</p>
        </div>
      </div>
      <div className='container-fluid mx-auto'>
        <div className="garudaPods text-center flex flex-col items-center gap-y-10">
          <h2 className="font-bold text-4xl">Research of 6.0</h2>
          <p>Besides building the pod and the tube, Avishkar is extending it's domains towards a lot of scalability aspects to realise this dream of India's Hyperloop. This year, the team has performed extensive R&D in a huge spectrum of possibilities to come up with solutions.</p>
        </div>
      </div>
      <div className='container mx-auto py-5'>
        <div className="podsSchematics text-center flex flex-col items-center gap-y-10">
          <h2 className="font-bold text-4xl">Research Schematics</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="schematicsSlider">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className="slider-img">
                      <img src="/images/Levitation2.png" alt="" className='w-100' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-img">
                      <img src="/images/Levitation1.png" alt="" className='w-100' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-6">
              <div className="schemanticsAccordions">
                <div className="headingAccord">
                  Components
                </div>
                <Accordions accordionData={researchAccordionData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <Footer/>
    </>
  )
}

export default research
