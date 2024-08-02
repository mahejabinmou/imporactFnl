// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import EventsHero from "../../../../public/Images/EventPage/WDW_0942.jpg";
const EventHeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url(${EventsHero})` }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] lg:h-[80vh] backgroundImage brig flex flex-col justify-between"
        >
          <Navbar></Navbar>

          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">Events</h2>
              <p className=" heroImgContentPara ">
                Home{" "}
                <span>
                  {" "}
                  <FaAngleRight></FaAngleRight>
                </span>{" "}
                events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeroSection;
