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
        name: "PROJECT ONE",
        type: "WEB DESIGN",
        pos: "start",
        image:
          "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "PROJECT 2",
        type: "GRAPHIC DESIGN",
        pos: "mid",
        image:
          "https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80",
      },
      {
        name: "PROJECT 3",
        type: "TYPE DESIGN",
        pos: "end",
        image:
          "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "PROJECT 4",
        type: "WEB DESIGN",
        pos: "mid",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "PROJECT 5",
        type: "WEB DESIGN",
        pos: "end",
        image:
          "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "PROJECT 6",
        type: "GRAPHIC DESIGN",
        pos: "mid",
        image:
          "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "PROJECT 7",
        type: "WEB DESIGN",
        pos: "start",
        image:
          "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "PROJECT 8",
        type: "TYPE DESIGN",
        pos: "end",
        image:
          "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    setProjects(projectsData);
  };

  const createBlogposts = () => {
    // Your blog posts array here
    const blogPostsData = [
      {
        title: "BLOG POST ONE",
        time: "3 MIN",
        image:
          "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "BLOG POST TWO",
        time: "4 MIN",
        image:
          "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "BLOG POST THREE",
        time: "5 MIN",
        image:
          "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  aut in odio iure laudantium vitae nemo impedit, tempore,
                  adipisci dicta sint provident architecto et voluptatum dolor
                  repudiandae beatae facilis corporis.
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
                src="https://avishkarhyperloop.com/videos/VfxVideo.mp4"
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
                        <p>{project.type}</p>
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
                    <p>{post.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section id="circle__section" ref={circleSectionRef}>
            <div className="circle__sticky">
              <h2>TBA</h2>
              <div className="circle__container">
                <div className="circle" ref={circleRef}></div>
              </div>
            </div>
          </section>
          <section id="discover" ref={dContainerRef}>
            <div className="discover__container">
              <p className="text__left" ref={leftTextRef}>
                LOREM IPSUM IN SDSTH THEE FRISO
              </p>
              <p className="text__right" ref={rightTextRef}>
                LOREM XUM VOL NI IAJAKIHSNA.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
