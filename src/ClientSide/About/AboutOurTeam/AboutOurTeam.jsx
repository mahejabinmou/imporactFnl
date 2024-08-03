/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Kyle Macdonald",
    title: "Medical Specialist",
    imgSrc:
      // https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg
      "./Images/aboutOurTeam.png",
  },
  {
    name: "Jane Doe",
    title: "Nursing Supervisor",
    imgSrc: "./Images/aboutOurTeam.png",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc: "./Images/aboutOurTeam.png",
  },
];

const teamMembers2xL = [
  {
    name: "Kyle Macdonald",
    title: "Medical Specialist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "Jane Doe",
    title: "Nursing Supervisor",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
  {
    name: "John Smith",
    title: "Therapist",
    imgSrc:
      "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg",
  },
];

const AboutOurTeam = () => {
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const largeSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  const largeXLSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const large2XLSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };

  return (
    <div className=" ">
      <div className=" px-[30px] md:px-[32px] lg:px-[60px] xl:px-[100px] [100px] mt-md:mt-[80px]   lg:mt-[80px]  xl:mt-[200px] 2xl:px-[100px] 2xl:mt-[200px]">
        <p className="ourServiceSmall">our Team</p>
        <h3 className="ourServiceTitle">human asset</h3>
        <div className="ourServieParaTextParent">
          <p className="ourServicePara">
            They are young individuals who are friendly, courteous and
            compassionate. They are handpicked and trained to get the job done
            efficiently and fast, upholding Emopract’s high levels of
            professionalism.They subscribe to the company's vision of quality
            care delivered with complete responsibility.
          </p>
        </div>
      </div>

      {/* ======== slider cards mobile ========= */}

      <div className="h-[300px] md:h-[500px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px] pt-[35px] md:pb-[60px] ">
        <img
          className="h-full w-full object-cover rounded-[10px]"
          src="./Images/aboutOurTeam.png"
          alt=""
        />
        {/* <div className="absolute bottom-0">
              <div className="teamContentParent">
                <h3 className="joysFirstSliderTitle">John Smith</h3>
                <p className="aboutTeamSubtitle">Therapist</p>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default AboutOurTeam;
