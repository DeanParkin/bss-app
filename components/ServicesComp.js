import image1 from "../public/imgs/bss-service-image-05.jpg";
import image2 from "../public/imgs/bss-service-image-06.jpg";
import image3 from "../public/imgs/bss-service-image-07.jpg";
import Image from "next/image";

export default function ServicesComp() {
  const serviceList = [
    {
      name: "Erogenous Fisting",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: image1,
    },
    {
      name: "Feisty Fondling",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: image2,
    },
    {
      name: "The Supreme Special",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: image3,
    },
  ];
  return (
    <>
      <div className="container text-light text-center pt-3 mb-2">
        <h2 className="h2 text-primary baskerville-font">Services</h2>
        <div className="d-flex justify-content-center">
          <p className="text-container">
            We offer commercial and domestic services, here are a few examples:
          </p>
        </div>
        <div className="row text-dark">
          {serviceList.map((service) => {
            return (
              <>
                <div className="col-md-6 col-lg-4 mb-3" key={service}>
                  <div className="card border-primary">
                    <Image
                      src={service.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="h3 card-title">{service.name}</p>
                      <p className="card-text">{service.description}</p>
                      <a href="#" className="btn btn-primary">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
