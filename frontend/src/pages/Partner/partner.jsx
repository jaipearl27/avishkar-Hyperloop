import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/footer';

const Partner = () => {
    const companyPowerdBy = [
        { src: 'images/IITMAA.png', alt: 'IITMAA', style: {}, link: 'https://iitmaa.org' },
        { src: 'images/iitm.png', alt: 'IITM', style: {}, link: 'https://www.iitm.ac.in', center: true },
        { src: 'images/cfi.png', alt: 'CFI', style: { /*filter: 'invert(1)'*/ }, link: 'https://cfi.iitm.ac.in/', center: true }
    ];
    const collaborations = [
        {
            title: "In Collaboration with",
            imgSrc: "/images/railways.png",
            description: "Indian Railways is a statutory body under the ownership of Ministry of Railways, Government of India that operates India's national railway system. It manages the fourth largest national railway system in the world by size. For a country so reliant on its trains, Indian Railways Vision 2020 envisages introduction of bullet trains. It will be a massive addition to its route network, with segregation of passenger and freight services into separate double-line corridors, raising the speeds of passenger trains from the current 130 kmph to 160-200 kmph on some routes, zero accidents and equipment failures and setting up of high-speed passenger corridors. They are helping us build the Hyperloop facility at Discovery Campus of IITM.",
            link: "#"
        },
        {
            title: "In Partnered With",
            imgSrc: "/images/l&tlogo.png",
            description: "L&T Heavy Civil Infrastructure, established in 1938, has been a pivotal force for over eight decades, wielding substantial expertise in civil engineering. With unwavering support from L&T's visionary leadership and a robust R&D backbone, our team is empowered and confident, benefitting from L&T's rich legacy in infrastructure development.",
            link: "#"
        },
        {
            title: "In Scalability Partner",
            imgSrc: "/images/TIInew.png",
            description: "Tube Investments of India was formed in the year 1959. In over six decades of its existence, TII has built significant skills in engineering and metallurgy, which is fully supported by a central R&D function. Their continuous backing to our team throughout the years has always helped in boosting our confidence.",
            link: "#"
        },
        {
            title: "In Materials Partner",
            imgSrc: "/images/AMjpg.jpg",
            description: "ArcelorMittal S.A. is a Luxembourg-based multinational steel manufacturing corporation headquartered in Luxembourg City. It was formed in 2006 from the takeover and merger of Arcelor by Indian-owned Mittal Steel. ArcelorMittal is the second largest steel producer in the world, with an annual crude steel production of 88 million metric tonnes as of 2022.",
            link: "#"
        }
    ]
    const partnerWithData = [
        {
            title: "In Partnered With",
            imgSrc: "/images/Matrix Nano.png",
            description: "ArcelorMittal S.A. is a Luxembourg-based multinational steel manufacturing corporation headquartered in Luxembourg City. It was formed in 2006 from the takeover and merger of Arcelor by Indian-owned Mittal Steel. ArcelorMittal is the second largest steel producer in the world, with an annual crude steel production of 88 million metric tonnes as of 2022.",
            link: "#"
        },
        {
            title: "In Partnered With",
            imgSrc: "/images/Intech.png",
            description: "ArcelorMittal S.A. is a Luxembourg-based multinational steel manufacturing corporation headquartered in Luxembourg City. It was formed in 2006 from the takeover and merger of Arcelor by Indian-owned Mittal Steel. ArcelorMittal is the second largest steel producer in the world, with an annual crude steel production of 88 million metric tonnes as of 2022.",
            link: "#"
        }
    ]

    return (
        <>
            <div className="ticketCalculator py-24">
                <div className="container">
                    <h3 className='text-white mb-2 font-semibold text-center text-3xl sm:text-4xl'>
                        Build the Future with Us
                    </h3>
                    <p className='text-white mb-5 font-normal text-center text-base'>
                        When disruptive technology is the new norm, it is prudent to expect the same in the Transportation industry.
                        We, Avishkar Hyperloop, are committed to work and develop on the prospects and viability of this pioneering concept.
                        We are keen to partner with you and leverage on this 5th mode of transportation. This ambitious concept requires enterprising sponsors and you can be the one.
                        Come, let's <Link to="#" className='para-link'>#LeapOntoTheLoop</Link> and dive into the future.
                    </p>
                    <h5 className='text-white mb-5 font-normal text-center text-base font-semibold fs-4'>
                        Please go through the <Link to="#" className='para-link'>Team Brochure</Link> to know more about us.
                    </h5>
                    <h5 className='text-white mb-5 font-normal text-center text-base font-semibold fs-4'>
                        Support the <Link to="#" className='para-link'>#IndianHyperloop</Link>!
                    </h5>

                    <div className="poweredBy_company bg-white py-5 px-3 rounded">
                        <div className="row">
                            {companyPowerdBy.map((company, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className={`companiesName ${company.center ? 'd-flex justify-content-center' : ''}`}>
                                        <Link to={company.link} target="_blank" rel="noopener noreferrer"><img src={company.src} alt={company.alt} style={company.style} /></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container py-5">
                <div className="row">
                    {collaborations.map((collaboration, index) => (
                        <div className="col-12 mb-5" key={index}>
                            <div className="collaborationCards">
                                <h2 className='fs-4 fw-semibold para-link mb-4 btmBorder py-2 px-4'>{collaboration.title}</h2>
                                <div className="imageWithText position-relative d-flex gap-5">
                                    <div className="imageBox">
                                        <img src={collaboration.imgSrc} alt={collaboration.title} />
                                    </div>
                                    <div className="textBox">
                                        <div className="textContainer">
                                            <p>{collaboration.description}</p>
                                            <a href={collaboration.link} className='ViewMoreBtn'>Visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {partnerWithData.map((partners, index) => (
                        <div className="col-md-6 mb-5" key={index}>
                            <div className="collaborationCards">
                                <h2 className='fs-4 fw-semibold para-link mb-4 btmBorder py-2 px-4'>{partners.title}</h2>
                                <div className="imageWithText position-relative d-flex gap-3">
                                    <div className="imageBox">
                                        <img src={partners.imgSrc} alt={partners.title} />
                                    </div>
                                    <div className="textBox">
                                        <div className="textContainer">
                                            <p>{partners.description}</p>
                                            <a href={partners.link} className='ViewMoreBtn'>Visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <Link href='https://www.avishkarhyperloop.com/sponsors_19.php' className="pods-versions">
                            Sponsors of Avishkar 2.0
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link href='https://www.avishkarhyperloop.com/sponsors_21.php' className="pods-versions">
                            Sponsors of Avishkar 4.0
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='https://www.avishkarhyperloop.com/sponsors_19.php' className="pods-versions">
                            Sponsors of Avishkar 5.0
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    )
}

export default Partner;
