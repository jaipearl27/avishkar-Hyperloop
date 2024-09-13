import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { lerp } from "../../utils/lerp";

const Home = () => {
  const mainRef = useRef(null);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const headerLeftRef = useRef(null);
  const headerRightRef = useRef(null);
  const projectsStickyRef = useRef(null);
  const projectSliderRef = useRef(null);
  const blogSectionRef = useRef(null);
  const circleSectionRef = useRef(null);
  const circleRef = useRef(null);
  const dContainerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const rightTextRef2 = useRef(null);
  // const textRevealsRefs = useRef([]);

  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  // Use useRef for projectCurrentX
  const projectCurrentX = useRef(0);
  const limit = useRef();
  const percentages = useRef(0);

  useEffect(() => {
    createProjects();
    createBlogposts();
    const handleScroll = () => {
      animateVideo();
      scrollBlogPosts();
      scrollCircle();
      scrollDiscover();
    };
    animate();
    mainRef.current.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setLimit);


    return () => {
      mainRef.current.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setLimit);
    };
  }, []);

  const createProjects = () => {
    // Your projects array here
    const projectsData = [
      {
        name: "Hon'ble Prime Minister interacts with the team!",
        type: "WEB DESIGN",
        date: '08-Apr-2023',
        pos: "start",
        image:
          "/images/honable-prime-minister.jpg",
      },
      {
        name: "Hon'ble Prime Minister interacts with the team!",
        type: "GRAPHIC DESIGN",
        date: '08-Apr-2023',
        pos: "mid",
        image:
          "/images/2nd.jpg",
      },
      {
        name: "Hon'ble Prime Minister interacts with the team!",
        type: "TYPE DESIGN",
        date: '08-Apr-2023',
        pos: "end",
        image:
          "/images/Co-image.jpg",
      },
      {
        name: "The CEO of Daimler visits our workspace",
        type: "WEB DESIGN",
        date: '30-Mar-2023',
        pos: "mid",
        image:
          "/images/europeHyperloop.jpg",
      },
      {
        name: "The CEO of Daimler visits our workspace",
        type: "WEB DESIGN",
        date: '30-Mar-2023',
        pos: "end",
        image:
         "/images/honable-prime-minister.jpg",
      },
      {
        name: "The CEO of Daimler visits our workspace",
        type: "GRAPHIC DESIGN",
        date: '30-Mar-2023',
        pos: "mid",
        image:
         "/images/Co-image.jpg",
      },
      {
        name: "European Hyperloop Week 2023",
        type: "WEB DESIGN",
        date: '17-July-2023 to 23-July-2023',
        pos: "start",
        image:
        "/images/europeHyperloop.jpg",
      },
      {
        name: "European Hyperloop Week 2023",
        type: "TYPE DESIGN",
        date: '17-July-2023 to 23-July-2023',

        pos: "mid",
        image:
         "/images/honable-prime-minister.jpg",
      },
      {
        name: "European Hyperloop Week 2023",
        type: "TYPE DESIGN",
        date: '17-July-2023 to 23-July-2023',

        pos: "end",
        image:
         "/images/europeHyperloop.jpg",
      },
    ];
    setProjects(projectsData);
  };

  const createBlogposts = () => {
    // Your blog posts array here
    const blogPostsData = [
      {
        title: "Hon’ble Union Finance Minister praises our work!",
        time: "Read More...",
        image:
          "/images/Co-image.jpg",
      },
      {
        title: "Avishkar Hyperloop at the EHW 2023",
        time: "Read More...",
        image:
        "/images/europeHyperloop.jpg",
      },
      {
        title: "Hon'ble Prime Minister meets Avishkar Hyperloop!",
        time: "Read More...",
        image:
        "/images/honable-prime-minister.jpg",
      },
      {
        title: "Wrapping up 6.0 : The future lies ahead",
        time: "Read More...",
        image:
          "/images/europeHyperloop.jpg",
      },
      {
        title: "Minister of Railways visits Avishkar Hyperloop!",
        time: "Read More...",
        image:
        "/images/honable-prime-minister.jpg",
      },
      {
        title: "The Yearly Roundup: 2021",
        time: "Read More...",
        image:
          "/images/europeHyperloop.jpg",
      },
      {
        title: "The Hyperloop and the Carbon",
        time: "Read More...",
        image:
        "/images/Co-image.jpg",
      },


    ];
    setBlogPosts(blogPostsData);
  };

  const animateVideo = () => {
    const { bottom } = videoSectionRef.current.getBoundingClientRect();
    let scale = 1 - (bottom - window.innerHeight) * 0.0005;
    scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
    videoRef.current.style.transform = `scale(${scale})`;

    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    headerLeftRef.current.style.transform = `translateX(${-textTrans}px)`;
    headerRightRef.current.style.transform = `translateX(${textTrans}px)`;
  };

  const animateProjects = () => {
    const offsetTop = projectsStickyRef.current.parentElement.offsetTop;
    let percentage = ((mainRef.current.scrollTop - offsetTop) / window.innerHeight) * 100;

    percentage = percentage <= 0 ? 0 : percentage > limit.current ? limit.current : percentage;

    console.log(percentage, limit.current)
    let projectTargetX = percentage;
    projectCurrentX.current = lerp(
      projectCurrentX.current,
      projectTargetX,
      0.4
    );
    projectSliderRef.current.style.transform = `translate3d(${-projectCurrentX.current}vw, 0 , 0)`;
  };

  const scrollBlogPosts = () => {
    const blogSectionTop = blogSectionRef.current.getBoundingClientRect().top;
    blogPosts.forEach((post, i) => {
      const postElement = document.getElementById(`post-${i}`);
      if (postElement.parentElement.getBoundingClientRect().top <= 1) {
        let offset = (blogSectionTop + window.innerHeight * (i + 1)) * 0.0005;
        offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
        postElement.style.transform = `scale(${1 + offset})`;
      }
    });
  };

  const scrollCircle = () => {
    const { top } = circleSectionRef.current.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = scaleTop / window.innerHeight;
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
    if (top <= 0) {
      circleRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    } else {
      circleRef.current.style.transform = `translate(-50%, -50%) scale(${0})`;
    }
  };

  const scrollDiscover = () => {
    const { bottom } = dContainerRef.current.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    leftTextRef.current.style.transform = `translateX(${-textTrans}px)`;
    rightTextRef.current.style.transform = `translateX(${textTrans}px)`;
    rightTextRef2.current.style.transform = `translateX(${textTrans}px)`;
  };

  const animate = () => {
    animateProjects();
    requestAnimationFrame(animate);
  };

  const setLimit = () => {
    limit.current =
      window.innerWidth <= 600
        ? percentages.current.small
        : window.innerWidth <= 1100
          ? percentages.current.medium
          : percentages.current.large;
  };

  const avishkar = "Avishkar".split("");
  const hyperloop = "Hyperloop".split("");

  return (
    <div>
      <main ref={mainRef}>
        <div className="scroll__container">
          <section id="hero">
            <div className="hero__container">
              <div className="hero__title">
                <div className="hero__title__header text__reveal">
                  <div>
                    {avishkar.map((char) => (
                      <span>{char}</span>
                    ))}
                  </div>
                  <div>
                    {hyperloop.map((char) => (
                      <span>{char}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="hero__cta">
                <h4>STUDIO</h4>
              </div> */}
            </div>
          </section>
          <section id="about">
            <div className="about__container">
              <div className="about__text">
                <p className=" line-clamp-4">
                  The team started as a student project at the Center for Innovation, IIT Madras. In the short time since inception, we proved our mettle at international Hyperloop competitions. We were the only Asian team at the finale of SpaceX Hyperloop Pod Competition 2019. Then, competing virtually in European Hyperloop Week 2021, we won the 'Most Scalable Pod Design' award by Zeleros Hyperloop and were in the global top-5 in Mechanical, Propulsion and Levitation award categories. We built our latest pod Avishkar 5.0, during the pandemic through relentless effort. Avishkar 5.0 Pod is equipped with many novel technologies that we built in-house from scratch and emerged in the global top 5 in 3 categories - Electrical Subsystem, Traction Subsystem and The Complete Pod Category in the European Hyperloop Week 2022. This year, through meticulous planning and design, we built the Pod 6.0, Garuda. Improving on the existing technologies through various testing methodologies, incorporated with other intricate technologies with immaculate provisions, Garuda stands as Asia's most advanced pod. We emerged Top-3 in the Socio-Economic Aspects of Hyperloop Development Category, Top-5 in the Guidance Category and Top-6 in the Sense and Control Category in the European Hyperloop Week 2023 held at Edinburgh, Scotland.

                  Currently, we have expanded our horizons and are focusing on taking a giant leap. We are aiming to build a 400m long vacuum tube facility at IIT Madras and establish a Centre for Hyperloop Excellence at IIT Madras in collaboration with the Indian Railways and L&T Constructions. We also intend to conduct a Global Hyperloop Competition at IIT Madras at the 400m vacuum tube facility making India a global center for Hyperloop Research.

                  To understand in-detail how safe the hyperloop will work in real-life and it's socio-economic implications, read our latest research document here. You are invited to read through our latest discoveries in Hyperloop technical advancements here. Remember to share your insights with us!
                </p>
              </div>
            </div>
          </section>
          <section id="video" ref={videoSectionRef}>
            <div className="shim"></div>
            <div className="video__sticky">
              <video
                className="main__video"
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                src="http://avishkarhyperloop.com/videos/VfxVideo.mp4"
              ></video>
              <div className="video__text__overlay">
                <h2 className="text__header__left" ref={headerLeftRef}>
                  SHOW
                </h2>
                <h2 className="text__header__right" ref={headerRightRef}>
                  CASE
                </h2>
              </div>
            </div>
          </section>
          <section id="projects">
            <div className="projects__sticky" ref={projectsStickyRef}>
              <div className="slider__container">
                <div className="projects__slider" ref={projectSliderRef}>
                  {projects.map((project, index) => (
                    <div key={index} className={`project ${project.pos}`}>
                      <div className="image__container">
                        <img
                          className="project__image"
                          src={project.image}
                          alt={project.name}
                        />
                      </div>
                      <div className="project__details">
                        <p>{project.name}</p>
                        <p>{project.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="blog" ref={blogSectionRef}>
            <div className="blog__hero">
              <h2 className="text__reveal">BLOG</h2>
            </div>
            {blogPosts.map((post, index) => (
              <div key={index} className="blog__post">
                <div className="post" id={`post-${index}`}>
                  <div className="post__image__container">
                    <img
                      className="blog__post__img"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  <div className="post__details">
                    <p>{post.title}</p>
                    <button>{post.time}</button>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section id="circle__section" ref={circleSectionRef}>
            <div className="circle__sticky">
              <p className="container text-xl text-center">
                <div className="text-center font-semibold text-4xl py-6">Overview</div>
                TBAThe team started as a student project at the Center for Innovation, IIT Madras. In the short time since inception, we proved our mettle at international Hyperloop competitions. We were the only Asian team at the finale of SpaceX Hyperloop Pod Competition 2019. Then, competing virtually in European Hyperloop Week 2021, we won the 'Most Scalable Pod Design' award by Zeleros Hyperloop and were in the global top-5 in Mechanical, Propulsion and Levitation award categories. We built our latest pod Avishkar 5.0, during the pandemic through relentless effort. Avishkar 5.0 Pod is equipped with many novel technologies that we built in-house from scratch and emerged in the global top 5 in 3 categories - Electrical Subsystem, Traction Subsystem and The Complete Pod Category in the European Hyperloop Week 2022. This year, through meticulous planning and design, we built the Pod 6.0, Garuda. Improving on the existing technologies through various testing methodologies, incorporated with other intricate technologies with immaculate provisions, Garuda stands as Asia's most advanced pod. We emerged Top-3 in the Socio-Economic Aspects of Hyperloop Development Category, Top-5 in the Guidance Category and Top-6 in the Sense and Control Category in the European Hyperloop Week 2023 held at Edinburgh, Scotland.

                Currently, we have expanded our horizons and are focusing on taking a giant leap. We are aiming to build a 400m long vacuum tube facility at IIT Madras and establish a Centre for Hyperloop Excellence at IIT Madras in collaboration with the Indian Railways and L&T Constructions. We also intend to conduct a Global Hyperloop Competition at IIT Madras at the 400m vacuum tube facility making India a global center for Hyperloop Research.

                To understand in-detail how safe the hyperloop will work in real-life and it's socio-economic implications, read our latest research document here. You are invited to read through our latest discoveries in Hyperloop technical advancements here. Remember to share your insights with us!
              </p>
              <div className="circle__container">
                <div className="circle" ref={circleRef}></div>
              </div>
            </div>
          </section>
          <section id="discover" ref={dContainerRef}>
            <div className="discover__container space-y-4">
              <p className="text__right max-w-6xl text-center" ref={rightTextRef2}>
                <div className=" text-black text-4xl font-medium text-center">HYPERLOOP</div>
              </p>
              <p className="text__left space-y-3" ref={leftTextRef}>

                <img className="h-[25rem]" src="http://avishkarhyperloop.com/images/Indexphpwebpfiles/team%20n%20musk.webp" alt="" />
              </p>
              <p className="text__right max-w-6xl text-center" ref={rightTextRef}>
                Elon Musk, founder of Tesla and SpaceX, unveiled the idea of Hyperloop to the World through a White Paper - Hyperloop Alpha. It is the fifth mode of transportation that moves freight and people quickly, safely and directly from the origin to destination. Passengers or cargos are loaded into the Hyperloop pod and accelerated gradually via electric propulsion through a low-pressure tube. The proposed Hyperloop model can achieve a top speed of over 1200 kmph. It is completely autonomous, safe, clean and enclosed. More importantly, Hyperloop is environment friendly and doesn't call for much maintenance too. Hyperloop has been "open-sourced" by Elon Musk and SpaceX to attract innovations and improvements in the concept, thus optimising the technology and bringing out the better version of itself.
              </p>
            </div>
          </section>


        </div>
      </main>
    </div>
  );
};

export default Home;
