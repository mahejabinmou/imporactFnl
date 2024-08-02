// import React from 'react';

// const AboutHero = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default AboutHero;

// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const ServiceHero = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default ServiceHero;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import aboutHeroImage from "../../../../public/Images/about/A7406383.jpg";
import Navbar from "../../Shared/Navbar/Navbar";

const AboutHero = () => {
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

  // https://res.cloudinary.com/dshn2s0tc/image/upload/v1719490307/Emopract/coomonHero_jzrn0s.png
  return (
    <div>
      <div className="">
        <div
          style={{ backgroundImage: `url(${aboutHeroImage})` }}
          className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[100vh] lg:h-[100vh]  backgroundImage flex flex-col justify-between"
        >
          <Navbar></Navbar>

          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">About</h2>
              <p className=" heroImgContentPara ">
                Home{" "}
                <span>
                  {" "}
                  <FaAngleRight></FaAngleRight>
                </span>{" "}
                About
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
