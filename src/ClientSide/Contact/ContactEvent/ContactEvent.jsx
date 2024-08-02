/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactEvent = () => {
  return (
    <div className="sectionGap">
      <div className="lg:grid grid-cols-2 justify-between items-center">
        <div>
          <p className="contactEventSmall md:text-center lg:text-left">
            Get in touch
          </p>
          <h3 className="conatactEventTitle md:text-center lg:text-left">
            let's chat!
          </h3>

          {/* <p className='contactDescription'>Nam mollis aliquet hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur augue purus, cursus maximus malesuada.</p> */}

          <div className="contactTitleSubttitleParent">
            <div className="contactIconParent">
              <IoCallSharp className="conatctEventIcon"></IoCallSharp>
            </div>
            <div>
              <h4 className="contactCTAtitle">9230977337</h4>
              {/* <p className='contactCTAsubtitle'>+91847512157</p> */}
            </div>
          </div>
          <div className="contactTitleSubttitleParent pt-[25px]">
            <div className="contactIconParent">
              <MdEmail className="conatctEventIcon"></MdEmail>
            </div>
            <div>
              <h4 className="contactCTAtitle">info@emopract.com</h4>
              {/* <p className='contactCTAsubtitle'>emopract@gmail.com</p> */}
            </div>
          </div>
        </div>
        <div className="bg-[#7EA254] mt-[35px] py-[35px] md:py-[50px] lg:py-[70px] xl:py-[80px] 2xl:py-[120px] rounded-[10px]">
          <h3 className="eventCardTitle">request for a session!</h3>
          <form className="space-y-[20px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px]">
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                Full Name
              </label>
              <input className="contactInpufeild" type="text" />
            </div>
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                Phone Number
              </label>
              <input className="contactInpufeild" type="text" />
            </div>
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                Email Address
              </label>
              <input className="contactInpufeild" type="text" />
            </div>
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                {" "}
                Message
              </label>
              <input className="contactInpufeild" type="text" />
            </div>

            <div className="inputParent pt-[30px] pb-[15px] md:pt-[35px] md:pb-[20px] lg:pt-[40px] lg:pb-[20px] xl:pt-[40px] xl:pb-[20px]  2xl:pb-[30px]">
              <button className="contactSendBtn">Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEvent;
