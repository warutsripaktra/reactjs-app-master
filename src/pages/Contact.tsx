import React from "react";
import { ContactComponent } from "../components/ContactComponent";
import TitleComponent from "../components/TitleComponent";

function ContactPage() {
  const title: string = "Contact Page";
  return (
    <>
      <TitleComponent data={title} />
      <ContactComponent />
    </>
  );
}

export default ContactPage;
