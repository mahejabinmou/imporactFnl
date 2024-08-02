// eslint-disable-next-line no-unused-vars
import React from "react";

const OurService = () => {
  return (
    <div className="">
      <div className=" sectionGap lg:grid lg:grid-cols-2 lg:gap-x-[5%] items-center">
        <div>
          <p className="ourServiceSmall">Our Services</p>
          <h3 className="ourServiceTitle">experience the pleasure of life</h3>
          <p className="ourServicePara">
            Joys of Life – the so-called trivialities and intangibles that add
            up to constitute a rich and full life, is our unique offering to our
            esteemed members. Our wellness buddies bring comfort and peace of
            mind with proactive care for health-related ailments.
          </p>
        </div>
        <div className="ourServiceImgParent  mt-[25px] md:mt-[25px] lg:mt-[25px] 2xl:mt-[25px] xl:mt-[25px]">
          <img
            className="h-full w-full object-cover rounded-[10px]"
            src="/public/Images/servicePage/A7405767.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurService;
