import React from "react";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="If you would like to ask a question or book a table, then get in touch with us."
      />
      <ContactForm />
    </>
  );
}
