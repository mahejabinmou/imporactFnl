// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarContact from "./NavbarContact/NavbarContact";
import ContactEvent from "./ContactEvent/ContactEvent";
import ContactFaq from "./ContactFaq/ContactFaq";
import Footer from "../Shared/Footer/Footer";
import Chatbot from "../Shared/Chatbot/Chatbot";

const Contact = () => {
  return (
    <div>
      <NavbarContact></NavbarContact>
      <ContactEvent></ContactEvent>
      <ContactFaq></ContactFaq>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
