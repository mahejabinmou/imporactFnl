// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import membershipCardOne from "../../../../public/Images/membership/Card 2.png";
import membershipCardTwo from "../../../../public/Images/membership/Card 1.png";
import membershipCardThree from "../../../../public/Images/membership/Card 3.png";
const MembershipHome = () => {
  const joyItems = [
    {
      imgSrc: membershipCardOne,
    },
    {
      imgSrc: membershipCardTwo,
    },
    {
      imgSrc: membershipCardThree,
    },
  ];

  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 3;
    slidesToScroll = 1;
  } else if (isXl) {
    slidesToShow = 3;
    slidesToScroll = 2;
  } else if (isLg) {
    slidesToShow = 3;
    slidesToScroll = 2;
  } else if (isMd) {
    slidesToShow = 2;
    slidesToScroll = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div
      className="bg-[#EDEDED] 
     mt-[85px] px-[30px]
   
    md:mt-[85px] md:px-[32px]
   
    lg:px-[60px] lg:mt-[105px]
    
    xl:px-[100px] xl:mt-[225px]
    
    2xl:px-[100px] 2xl:mt-[225px]"
    >
      <div className="py-[51px] px-[30px] 2xl-[100px] xl-[100px] md-[100px] ">
        <div>
          <p className="homeMemberShipSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
            Membership
          </p>
          <h3 className="homeMemberShipTitle ">lifestyle package</h3>
        </div>
        {/* <div
          className="grid grid-cols-1 gap-y-[15px] cursor-pointer
        2xl:grid-cols-3 2xl:gap-x-[60px] 2xl:pt-[50px]  xl:pt-[40px] lg:pt-[40px]  md:pt-[40px] xl:grid-cols-3 xl:gap-x-[50px]
        lg:grid-cols-3 lg:gap-x-[50px] md:grid-cols-3 md:gap-x-[30px] "
        >
          <Link to="/membership">
            <div
              className="h-[450px] 
    2xl:h-[478px]
    xl:h-[478px]
    md:h-[200px]
    lg:h-[300px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src="
                https://i.ibb.co/fSs0N5s/Whats-App-Image-2024-07-24-at-10-22-36-AM-4.jpg"
                alt=""
              />
            </div>
          </Link>

          <Link to="/membership">
            <div
              className="h-[450px] 
    2xl:h-[478px]
    xl:h-[478px]
    md:h-[200px]
    lg:h-[300px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src="/public/Images/membership/WhatsApp Image 2024-07-24 at 10.22.36 AM (3).jpeg"
                alt=""
              />
            </div>
          </Link>

          <Link to="/membership">
            <div
              className="h-[450px] 
    2xl:h-[478px]
    xl:h-[478px]
    md:h-[200px]
    lg:h-[300px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src="https://i.ibb.co/zrHWpYx/Whats-App-Image-2024-07-24-at-10-22-35-AM.jpg"
                alt=""
              />
            </div>
          </Link>
        </div> */}
        <div className="slider-container">
          <Slider {...settings}>
            {joyItems.map((item, index) => (
              <Link to={item.link} key={index} className="px-2">
                <div>
                  <Link to="/membership">
                    <div className="h-[404]">
                      <img
                        className="h-full w-full object-cover rounded-[10px]"
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;
