import React from "react";
import SEO from "../components/SEO";
import { useState } from "react";
//import Image from "next/image";
//import Gallery from "../components/Gallery";

export default function Gallery({ feed }) {
  //const images = feed.data;
  let [numOfImages, setNumOfImages] = useState(9);

  const loadClick = () => {
    setNumOfImages(numOfImages + 6);
  };

  const arr = feed.data.filter((item) => item.media_type === "IMAGE");
  //console.log(arr);
  const images = arr.splice(0, numOfImages);

  return (
    <>
      <SEO
        title="Gallery"
        description="The Anchor, Digbeth is a place of comfort to enjoy real ale, ciders, craft beers, wine, spirits and even cocktails, modern drinking in a traditional boozer."
      />
      {/* <div className="container text-center pt-3">
        <h2 className="h2 text-primary baskerville-font">Gallery</h2>
      </div> */}
      <div className="container text-center pt-3">
        <h2 className="h2 text-primary baskerville-font">Gallery</h2>
      </div>
      <div className="container mt-4">
        <div className="row">
          {images &&
            images.map((image) => (
              <div key={image.id} className="col-md-4">
                <a
                  href={image.permalink}
                  className="card mb-2 border-primary ratio ratio-1x1"
                >
                  <img
                    //height={400}
                    //width={400}
                    //layout="fill"
                    //placeholder="blur"
                    //loader={imageLoader}
                    src={image.media_url}
                    alt={image.caption}
                    className="card-img"
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2 mb-4">
        <button className="btn me-2" onClick={loadClick}>
          Load more
        </button>
        <a href="https://www.instagram.com/theanchordigbeth1797/">
          <button className="btn">go to instagram</button>
        </a>
      </div>
    </>
  );
}

// ${process.env.INSTAGRAM_KEY}

export const getStaticProps = async () => {
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(apiUrl);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
    revalidate: 3600,
  };
};
