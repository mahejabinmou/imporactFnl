import "./AboutOurMission.css";
import serviceWellness from "../../../../public/Images/servicesWellness2.png";
const AboutOurMission = () => {
  return (
    <div className="w-full mx-auto sectionGap">
      <div className="md:px-[10px] 2xl:px-[10px] rounded-[10px]">
        <div className="relative h-[400] md:h-[450px] xl:h-[550px] 2xl:h-[700px] group">
          <img
            src={serviceWellness}
            alt=""
            className="h-full w-full object-cover rounded-[10px]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-[10px] opacity-0 transform translate-y-5 transition-opacity  duration-300 ease-in-out group-hover:opacity-80 group-hover:translate-y-0">
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="mt-2 storyDoctorDes">
              We provide the services needed to ensure the very best quality of
              life for seniors. Our aim is to help elders be active and
              carefree, reassured by our constant assistance. We promise to
              offer trustworthy and reliable support and peace of mind for
              seniors and their family members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurMission;
