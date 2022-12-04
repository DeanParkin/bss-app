import React from "react";
import Image from "next/image";
import image1 from "../public/imgs/Associates/Birmingham-City-Council-01.png";
import image2 from "../public/imgs/Associates/Cherry-Reds-01.png";
import image3 from "../public/imgs/Associates/Coventry-City-Council-01.png";
import image4 from "../public/imgs/Associates/Sommar-Brewery-01.png";
import image5 from "../public/imgs/Associates/Subside-01.png";
import image6 from "../public/imgs/Associates/The-Anchor-01.png";
import image7 from "../public/imgs/Associates/The-Church-01.png";
import image8 from "../public/imgs/Associates/The-Flapper-01.png";

const associateList = [
  {
    name: "Birmingham City Council",
    image: image1,
    link: "https://www.birmingham.gov.uk/",
  },
  {
    name: "Cherry Red's",
    image: image2,
    link: "https://cherryreds.com/",
  },
  {
    name: "Coventry City Council",
    image: image3,
    link: "https://www.coventry.gov.uk/",
  },
  {
    name: "Sommar Brewery",
    image: image4,
    link: "https://sommar.co.uk/",
  },
  {
    name: "Subside",
    image: image5,
    link: "https://www.subsidebar.co.uk/",
  },
  {
    name: "The Anchor",
    image: image6,
    link: "https://www.theanchordigbeth.com/",
  },
  {
    name: "The Church Inn",
    image: image7,
    link: "https://www.thechurchjq.co.uk/",
  },
  {
    name: "The Flapper",
    image: image8,
    link: "https://www.facebook.com/TheFlapperBrum/",
  },
];

export default function Associates() {
  const imageCss = { maxWidth: "100%", height: "auto" };
  return (
    <>
      <div className="assoc-wrapper">
        <div className="assoc-slider">
          <div className="assoc-slide-track">
            {associateList.map((assoc, key) => {
              return (
                <div className="assoc-slides" key={key}>
                  <a
                    href={assoc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`link to ${assoc.name} page`}
                  >
                    <Image
                      src={assoc.image}
                      alt={assoc.name}
                      style={imageCss}
                      className="assoc-img"
                      priority={true}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </a>
                </div>
              );
            })}
            {associateList.map((assoc, key) => {
              return (
                <div className="assoc-slides" key={key}>
                  <a
                    href={assoc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`link to ${assoc.name} page`}
                  >
                    <Image
                      src={assoc.image}
                      alt={assoc.name}
                      style={imageCss}
                      className="assoc-img"
                      priority={true}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
