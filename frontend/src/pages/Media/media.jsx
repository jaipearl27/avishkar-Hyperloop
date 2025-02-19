import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import FeatureSlider from '../../components/Slider/swiper'
import Footer from '../../components/Footer/footer';

const media = () => {
  const slideData2022_23 = [
    <img src="../../../public/images/abpedu.png" alt="Slide 1" className="feature-img" />,
    <img src="../../../public/images/analytics_india.webp" alt="Slide 2" className="feature-img" />,
    <img src="../../../public/images/bwedu.png" alt="Slide 3" className="feature-img" />,
    <img src="../../../public/images/zee_news.png" alt="Slide 4" className="feature-img" />,
    <img src="../../../public/images/TOI.png" alt="Slide 5" className="feature-img" />,
    <img src="../../../public/images/the_hawk.webp" alt="Slide 6" className="feature-img" />,
  ];

  const slideData2021_22 = [
    <img src="../../../public/images/ndtv.png" alt="Slide 7" className="feature-img" />,
    <img src="../../../public/images/news18.png" alt="Slide 8" className="feature-img" />,
    <img src="../../../public/images/lokmat.webp" alt="Slide 9" className="feature-img" />,
    <img src="../../../public/images/hindu.png" alt="Slide 10" className="feature-img" />,
    <img src="../../../public/images/dna.jpg" alt="Slide 11" className="feature-img" />,
    <img src="../../../public/images/india_today.png" alt="Slide 12" className="feature-img" />,
  ];
  const [selectedYear, setSelectedYear] = useState("2022-23");
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
  const slides = selectedYear === "2022-23" ? slideData2022_23 : slideData2021_22;
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
      <div className="container mx-auto py-5">
        <div className="featureSlider">
          <h3>Featured In</h3>
          <div className='d-flex justify-content-center align-items-center gap-5 mb-3' >
            <div className='d-flex gap-2'>
              <input
                type="radio"
                id="year2022_23"
                name="year"
                value="2022-23"
                checked={selectedYear === "2022-23"}
                onChange={handleYearChange}
              />
              <label htmlFor="year2022_23">2022-23</label>
            </div>
            <div className='d-flex gap-2'>
              <input
                type="radio"
                id="year2021_22"
                name="year"
                value="2021-22"
                checked={selectedYear === "2021-22"}
                onChange={handleYearChange}
              />
              <label htmlFor="year2021_22">2021-22</label>
            </div>
          </div>
          <FeatureSlider slides={slides} navigation={true} />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default media
