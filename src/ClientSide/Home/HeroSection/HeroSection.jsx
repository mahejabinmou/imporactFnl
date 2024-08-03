/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import slideOne from "../../../../public/Images/slides/slide1.jpg";
import slideTwo from "../../../../public/Images/slides/slide2.jpg";
import slideThree from "../../../../public/Images/slides/slide3.jpg";
import Navbar from "../../Shared/Navbar/Navbar";
import Home1 from "../../../../public/Images/Home/Home1.jpg";
import Home2 from "../../../../public/Images/HomePopular/Home2.jpg";
import Home3 from "../../../../public/Images/HomePopular/H3.jpg";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar></Navbar>

      {/* Slider Container */}
      <div className="slider-container  md:hidden block">
        <Slider {...settings}>
          <div className="relative ">
            <div
              style={{ backgroundImage: `url(${Home1})` }}
              className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  lg:h-[80vh]  "
            >
              {/* Hero Image Content */}
              {/* <div className="HomeheroImgParent flex justify-center lg:justify-start items-end h-[100vh]  lg:h-[100vh]  bg-slate-950 bg-clip-padding backdrop-filter backdrop-brightness-125  backdrop-blur-[1px] bg-opacity-60 saturate-100 backdrop-contrast-100">
                <div className="lg:w-1/2 ">
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div> */}
            </div>
          </div>
          {/* slider two */}
          <div className="relative">
            <div
              style={{ backgroundImage: `url(${Home2})` }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  lg:h-[80vh]  "
            >
              {/* Hero Image Content */}
              {/* <div className="HomeheroImgParent flex items-end h-[100vh]  lg:h-[100vh]  w-full bg-slate-950 bg-clip-padding backdrop-filter backdrop-brightness-125  backdrop-blur-[1px] bg-opacity-60 saturate-100 backdrop-contrast-100">
                <div className="lg:w-1/2 ">
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    In turn, we need to be their shade and support, ensuring
                    "Wellness" in their advanced years.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div> */}
            </div>
          </div>

          {/* slider three */}
          <div className="relative">
            <div
              style={{ backgroundImage: `url(${Home3})` }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  lg:h-[80vh]  "
            >
              {/* Hero Image Content */}
              {/* <div className="HomeheroImgParent flex items-end h-[100vh]  lg:h-[100vh]  w-full bg-slate-950 bg-clip-padding backdrop-filter backdrop-brightness-125  backdrop-blur-[1px] bg-opacity-60 saturate-100 backdrop-contrast-100">
                <div className="lg:w-1/2 ">
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    By having them experience "Joys of Living" when they need
                    them the most.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    2xl:pb-[50px]
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div> */}
            </div>
          </div>
        </Slider>
      </div>

      {/* Slider Container big screen*/}
      <div className="slider-container  hidden md:block">
        <Slider {...settings}>
          <div className="relative ">
            <div
              style={{ backgroundImage: `url(${slideOne})` }}
              className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  lg:h-[80vh]  "
            >
              {/* Hero Image Content */}
              {/* <div className="HomeheroImgParent flex justify-center lg:justify-start items-end h-[100vh]  lg:h-[100vh]  bg-slate-950 bg-clip-padding backdrop-filter backdrop-brightness-125  backdrop-blur-[1px] bg-opacity-60 saturate-100 backdrop-contrast-100">
                <div className="lg:w-1/2 ">
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div> */}
            </div>
          </div>
          {/* slider two */}
          <div className="relative">
            <div
              style={{ backgroundImage: `url(${slideTwo})` }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  lg:h-[80vh]  "
            >
              {/* Hero Image Content */}
              {/* <div className="HomeheroImgParent flex items-end h-[100vh]  lg:h-[100vh]  w-full bg-slate-950 bg-clip-padding backdrop-filter backdrop-brightness-125  backdrop-blur-[1px] bg-opacity-60 saturate-100 backdrop-contrast-100">
                <div className="lg:w-1/2 ">
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    In turn, we need to be their shade and support, ensuring
                    "Wellness" in their advanced years.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div> */}
            </div>
          </div>

          {/* slider three */}
          <div className="relative">
            <div
              style={{ backgroundImage: `url(${slideThree})` }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  lg:h-[80vh]  "
            >
              {/* Hero Image Content */}
              {/* <div className="HomeheroImgParent flex items-end h-[100vh]  lg:h-[100vh]  w-full bg-slate-950 bg-clip-padding backdrop-filter backdrop-brightness-125  backdrop-blur-[1px] bg-opacity-60 saturate-100 backdrop-contrast-100">
                <div className="lg:w-1/2 ">
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    By having them experience "Joys of Living" when they need
                    them the most.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    2xl:pb-[50px]
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
