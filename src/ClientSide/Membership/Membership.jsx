// eslint-disable-next-line no-unused-vars
import React from "react";
import MembershipHero from "./MembershipHero/MembershipHero";
import MembershipCard from "./MembershipCard/MembershipCard";
import MembershipFaq from "./MembershipFaq/MembershipFaq";
import Footer from "./../Shared/Footer/Footer";

import Chatbot from "../Shared/Chatbot/Chatbot";
import MembershipEvent from "./MembershipEvent/MembershipEvent";

const Membership = () => {
  return (
    <div>
      <MembershipHero></MembershipHero>
      <MembershipCard></MembershipCard>
      {/* <MemberTrending></MemberTrending> */}
      <MembershipEvent></MembershipEvent>
      <MembershipFaq></MembershipFaq>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
};

export default Membership;
