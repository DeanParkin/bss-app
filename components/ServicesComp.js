import React from "react";
import image1 from "../public/imgs/bss-service-image-05.jpg";
import image2 from "../public/imgs/bss-service-image-06.jpg";
import image3 from "../public/imgs/bss-service-image-07.jpg";
//import Image from "next/image";

export default function ServicesComp() {
  const serviceList = [
    {
      name: "Events Security",
      description:
        "Working in collaboration with events organisers, we can fully risk assess every potential situation to grantee the safety of your event, with all considerations including crowd management, stewarding, emergency planning and much more.",
      image: image1,
    },
    {
      name: "Door Supervision",
      description:
        "From offices to licensed venues, BSS will ensure all compliance and record keeping to satisfy your necessary legal requirements while providing a friendly approach to dealing with confrontation to ensure your brand is represented to the highest standards.",
      image: image2,
    },
    {
      name: "Site Security",
      description:
        "For all types of sites we wil establish a regular route of patrol and record keeping to ensure all your property is kept safe.",
      image: image1,
    },
    {
      name: "CCTV Monitoring",
      description:
        "Our specialist CCTV security team will monitor each camera closely for your reassurance so that any suspicious activity won’t be missed or ignored.",
      image: image3,
    },
  ];

  const ImageCss = { maxWidth: "100%", height: "auto" };

  return (
    <>
      <div className="container text-light text-center pt-3 mb-2">
        <h2 className="h2 text-primary baskerville-font">Services</h2>
        <div className="d-flex justify-content-center">
          <p className="text-container">
            We offer a range of commercial and domestic solutions, to suit
            various requirements. here are a few examples of what we can offer.
          </p>
        </div>
        <div className="row text-dark">
          {serviceList.map((service, key) => {
            return (
              <React.Fragment key={key}>
                <div className="col-md-6 mb-3" key={service}>
                  <div className="card border-primary">
                    {/* <Image
                      src={service.image}
                      className="card-img-top"
                      alt="..."
                      style={ImageCss}
                    /> */}
                    <div className="card-body">
                      <p className="h3 card-title">{service.name}</p>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
