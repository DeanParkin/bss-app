import React from "react";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="A formal friendly door security Firm, aimed to raise the standard in the security industry."
      />
      <ContactForm />
    </>
  );
}
