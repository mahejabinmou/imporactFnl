// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 3;
    slidesToScroll = 4;
  } else if (isXl) {
    slidesToShow = 3;
    slidesToScroll = 4;
  } else if (isLg) {
    slidesToShow = 2;
    slidesToScroll = 5;
  } else if (isMd) {
    slidesToShow = 2;
    slidesToScroll = 5;
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
      className="mt-[200px] px-[32px] 2xl:px-[100px] 2xl:mt-[200px]
    xl:px-[100px] xl:mt-[200px] lg:px-[60px] lg:mt-[80px] md:px-[60px] md:mt-[80px]"
    >
      <div>
        <p className="memberSmall">Events</p>
        <h2 className="memberTitle pb-[25px] lg:pb-[50px] md:pb-[50px] ">
          Celebration
        </h2>
      </div>

      {/* =========large slider ==== */}

      <div className="slider-container hidden md:block">
        <Slider {...settings}>
          <div className='rounded-[10px]  bg-[url("https://i.ibb.co/tKZjdkt/image-01-2.png")] bg-no-repeat  bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Independence Day</h3>
                <div className="flex items-center justify-start">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      our pride ... our glory
                    </p>
                    <p className="memberSliderSubtitle">15th August 2024</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/rcB3Grv/image-02-2.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Story Telling Session</h3>
                <div className="flex items-center justify-start">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">sharing treasure …</p>
                    <p className="memberSliderSubtitle">21 Sep'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/86ZNyTh/image-03.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Durga Puja Preview</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      experience excellence
                    </p>
                    <p className="memberSliderSubtitle">
                      Date : 30 Sep - 4 Oct'24
                    </p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/gZqQsvd/image-04-3.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Diwali On</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">moments of sparkle</p>
                    <p className="memberSliderSubtitle">26 Oct'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/h94jFP8/image-05-1.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Childern's Day</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">elders' way</p>
                    <p className="memberSliderSubtitle">14 Nov'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/mCQcmQw/image-07.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Laugh all the Way </h3>
                <div className="flex items-center justify-start">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">fun together</p>
                    <p className="memberSliderSubtitle">14 Dec'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/NWxXrj5/image-11.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Xmas to New Year </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">let's celebrate</p>
                    <p className="memberSliderSubtitle">28 Dec'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* mobile */}
      <div className="slider-container md:hidden block">
        <Slider {...settings}>
          <div className='rounded-[10px] bg-[url("https://i.ibb.co/47s1R83/Independence-Day-Fusion-Celebration-1.png")] bg-no-repeat  bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full border">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Independence Day</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      our pride ... our glory
                    </p>
                    <p>15th August 2024 </p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/jWkfCbT/Story-Telling-Session.png")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Story Telling Session</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      Contrary to popular belief, is not
                    </p>
                    <p>Date : September,21st</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/TWPd72y/Durga-Puja-Preview.png")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Durga Puja Preview</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      Contrary to popular belief, is not
                    </p>
                    <p>Date : Sep,30th to Oct,4th</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/m5xcTGT/Diwali-On.png")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Diwali On</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      Contrary to popular belief, is not
                    </p>
                    <p>Date : October,26th</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/HPrmJKc/Children-s-Day-Elders-Way.png")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">
                  Children's Day - Elders Way
                </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      Contrary to popular belief, is not
                    </p>
                    <p>Date : November,14th</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/8bW7J5b/Laugh-all-the-way.png")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Laugh all the way </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      Contrary to popular belief, is not
                    </p>
                    <p>Date : December,14th</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/3F3KcKk/Xmas-to-New-Year-Party-copy.png")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Xmas to New Year Party </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      Contrary to popular belief, is not
                    </p>
                    <p>Date : December,28th</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Events;
