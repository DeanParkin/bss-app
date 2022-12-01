import React from "react";
import Image from "next/image";

import image1 from "../public/imgs/bss-hero.jpg";
import image2 from "../public/imgs/bss-service-image-05.jpg";
import image3 from "../public/imgs/bss-service-image-06.jpg";

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

const ImageCss = {
  maxWidth: "100%",
  height: "auto",
  //width: "100vw",
};

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
              //className="d-block w-100"
              priority={true}
              placeholder="blur"
              // width={1350}
              // height={600}
              //objectFit="fill"
              //objectFit="cover"
              style={ImageCss}
            />
            <div class="carousel-caption d-none d-md-block">
              <h2 className="fs-5 baskerville-font">
                Welcome To <br />
                <span className="h1 text-primary">
                  Bevington Security Solutions
                </span>
              </h2>

              <p className="my-2">
                A formal friendly door security Firm, aimed to raise the
                standard in the security industry.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src={image2}
              alt="Front exterior of the Anchor"
              //className="d-block w-100"
              priority={true}
              //placeholder="blur"
              //objectFit="fill"
              //objectFit="cover"
              style={ImageCss}
              // objectFit="cover"
            />
            <div class="carousel-caption d-none d-md-block">
              <h2 className="fs-5 baskerville-font">
                Welcome To <br />
                <span className="h1 text-primary">
                  Bevington Security Solutions
                </span>
              </h2>

              <p className="my-2">
                A formal friendly door security Firm, aimed to raise the
                standard in the security industry.
              </p>
            </div>
            {/*<img src="..." className="d-block w-100" alt="...">*/}
          </div>
          <div className="carousel-item">
            <Image
              src={image3}
              alt="Octopus art in the Anchor courtyard"
              //              className="d-block w-100"
              priority={true}
              //placeholder="blur"
              //objectFit="fill"
              style={ImageCss}

              //objectFit="cover"
            />
            {/*<img src="..." className="d-block w-100" alt="...">*/}

            <div class="carousel-caption d-none d-md-block">
              <h2 className="fs-5 baskerville-font">
                Welcome To <br />
                <span className="h1 text-primary">
                  Bevington Security Solutions
                </span>
              </h2>

              <p className="my-2">
                A formal friendly door security Firm, aimed to raise the
                standard in the security industry.
              </p>
            </div>
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
