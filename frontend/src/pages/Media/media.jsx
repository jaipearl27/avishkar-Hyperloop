import React from 'react'
import FeatureSlider from '../../components/Slider/swiper'

const media = () => {
  const slideData = [
    <img src="../../../public/images/Levitation2.png" alt="Slide 1" className="feature-img" />,
    <img src="../../../public/images/Levitation1.png" alt="Slide 1"  className="feature-img" />,
    <img src="../../../public/images/Levitation2.png" alt="Slide 1"  className="feature-img"/>,
    <img src="../../../public/images/Levitation1.png" alt="Slide 1"  className="feature-img"/>,
  ];  
  return (
 <>
      <div className='container-fluid mx-auto'>
        <div className="interviewBanner text-center flex flex-col items-center gap-y-10">
          <h2 className="font-bold text-4xl">Interviews</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="interview-blog">
              <iframe width="498" height="315" src="https://www.youtube.com/embed/cvZ814pKJPo" title="IIT Madras Students&#39; Hyperloop Pod Gets L&amp;T Technology Services Funding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="col-md-6">
            <div className="interview-blog">
            <iframe width="498" height="315" src="https://www.youtube.com/embed/HZxSu9l_vLA" title="Avishkar Hyperloop develops Pod with novel technologies | Republic TV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
          </div>
          <p>Our research and achievements in our short journey have been covered extensively in national media.</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="featureSlider">
          <FeatureSlider slides={slideData} />
        </div>
      </div>
 </>
  )
}

export default media
