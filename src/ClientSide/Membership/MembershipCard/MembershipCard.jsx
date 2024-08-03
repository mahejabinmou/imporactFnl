/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import cardOne from "../../../../public/Images/membership/card_one.jpg";
import cardTwo from "../../../../public/Images/membership/card_two.png";
import cardThree from "../../../../public/Images/membership/card_three.png";
const MembershipCard = () => {
  return (
    <div className="sectionGap">
      <div className="lg:text-center">
        <p className="memberSmall">Membership</p>
        <h2 className="memberTitle pb-[50px] lg:pb-[50px] md:pb-[50px] xl:pb-[50px] 2xl:pb-[50px]">
          lifestyle package
        </h2>
        {/* <p className='memberParaText lg:hidden'>Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you.</p> */}
      </div>
      {/*======== membership cards ========= */}

      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-y-[60px] lg:gap-x-[25px] md:gap-x-[25px] xl:gap-x-[25px] 2xl:gap-x-[25px] lg:gap-y-[60px] 2xl:gap-y-[60px] md:gap-y-[60px]">
        {/* ============ card one========== */}
        {/* <div className='rounded-[20px] p-[30px] bg-[#7EA254] lg:bg-transparent memberSubparentCard group '>
                    <p className='memberCardExpert'>Expert</p>
                    <div className='memberPriceParent'>
                        <h2 className='memberCardPriceTtile'>Rs.30,000</h2>
                        <p className='memberCardPriceSubTtile'>for 12 months/ Per Person</p>
                    </div>
                    <p className='membermiddlePara'>"Joys of Living Star" visit - 12 ( 180 minutes per visit )</p>
                    <button className='memberApplyBtn'>Apply Now</button>
                    <hr />
                    <h3 className='memberCardOfferService'>Offer Services :</h3>
                    <div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Health Record Maintenance </p>
                        </div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>24/7 Emergency Coordination - For 12 months </p>
                        </div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hospital Assist (Preferred Patient Collaboration)</p>
                        </div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Nutritionist Visit - Eat Healthy</p>
                        </div >
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hello ep !! Calls (Customised as per Member)</p>
                        </div>
                    </div>
                </div> */}
        <div className=" ">
          <img src={cardOne} className="h-full w-full "></img>
        </div>
        {/* ============ card two========== */}
        {/* <div className='rounded-[20px] p-[30px] lg:bg-[#7EA254] bg-transparent memberSubparentCard group '>
                    <p className='memberCardExpert2'>Expert</p>
                    <div className='memberPriceParent2'>
                        <h2 className='memberCardPriceTtile2'>Rs.30,000</h2>
                        <p className='memberCardPriceSubTtile2'>for 12 months/ Per Person</p>
                    </div>
                    <p className='membermiddlePara2'>"Joys of Living Star" visit - 12 ( 180 minutes per visit )</p>
                    <button className='memberApplyBtn2'>Apply Now</button>
                    <hr />
                    <h3 className='memberCardOfferService2'>Offer Services :</h3>
                    <div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Health Record Maintenance </p>
                        </div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>24/7 Emergency Coordination - For 12 months </p>
                        </div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hospital Assist (Preferred Patient Collaboration)</p>
                        </div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Nutritionist Visit - Eat Healthy</p>
                        </div >
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hello ep !! Calls (Customised as per Member)</p>
                        </div>
                    </div>
                </div> */}
        <div className="">
          <img src={cardTwo} className="h-full w-full "></img>
        </div>
        {/* =================== card theree============== */}
        {/* <div className='rounded-[20px] p-[30px]  memberSubparentCard group '>
                    <p className='memberCardExpert3'>Expert</p>
                    <div className='memberPriceParent'>
                        <h2 className='memberCardPriceTtile3'>Rs.30,000</h2>
                        <p className='memberCardPriceSubTtile3'>for 12 months/ Per Person</p>
                    </div>
                    <p className='membermiddlePara3'>"Joys of Living Star" visit - 12 ( 180 minutes per visit )</p>
                    <button className='memberApplyBtn3'>Apply Now</button>
                    <hr />
                    <h3 className='memberCardOfferService3'>Offer Services :</h3>
                    <div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Health Record Maintenance </p>
                        </div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>24/7 Emergency Coordination - For 12 months </p>
                        </div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hospital Assist (Preferred Patient Collaboration)</p>
                        </div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Nutritionist Visit - Eat Healthy</p>
                        </div >
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hello ep !! Calls (Customised as per Member)</p>
                        </div>
                    </div>
                </div> */}
        <div className=" ">
          <img src={cardThree} className="h-full w-full "></img>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
