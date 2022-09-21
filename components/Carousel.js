import React from "react";
import Image from "next/image";

import image1 from "../public/imgs/BEER-TAPS-2.webp";
import image2 from "../public/imgs/EXTERIOR.webp";
import image3 from "../public/imgs/OCTOPUS.webp";

let imageArray = [
  {
    src: image1,
    alt: "Beer Taps",
    width: 1120,
    height: 630,
    layout: "fill",
    className: "carousel-image",
  },
  {
    src: image2,
    alt: "Exterior",
    width: 1120,
    height: 630,
    layout: "fill",
    className: "carousel-image",
  },
  {
    src: image3,
    alt: "Octopus",
    width: 1120,
    height: 630,
    layout: "fill",
    className: "carousel-image",
  },
];

const Carousel = () => {
  return (
    <>
      <div
        id="carouselHero"
        className="carousel slide carousel-fade h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={image1}
              alt="The Anchor has a wide range of beer"
              className="d-block w-100"
              priority={true}
              placeholder="blur"
              // width={1350}
              // height={600}
              //objectFit="fill"
              //objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={image2}
              alt="Front exterior of the Anchor"
              className="d-block w-100"
              priority={true}
              //placeholder="blur"
              //objectFit="fill"
              //objectFit="cover"
              layout="responsive"
              // objectFit="cover"
            />
            {/*<img src="..." className="d-block w-100" alt="...">*/}
          </div>
          <div className="carousel-item">
            <Image
              src={image3}
              alt="Octopus art in the Anchor courtyard"
              className="d-block w-100"
              priority={true}
              //placeholder="blur"
              //objectFit="fill"

              layout="responsive"
              //objectFit="cover"
            />
            {/*<img src="..." className="d-block w-100" alt="...">*/}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHero"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHero"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
