import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import ServicesComp from "../components/ServicesComp";
import { useState } from "react";

export default function Home({ feed }) {
  // let [numOfImages, setNumOfImages] = useState(6);

  // const loadClick = () => {
  //   setNumOfImages(numOfImages + 6);
  // };

  // const arr = feed.data.filter((item) => item.media_type === "IMAGE");
  // //console.log(arr);
  // const images = arr.splice(0, numOfImages);

  return (
    <div>
      <SEO
        title="Home"
        description="A formal friendly door security Firm, aimed to raise the standard in the security industry."
      />
      {/* <Carousel /> */}
      <header className="text-light text-center container pt-3">
        <h2 className="fs-5 baskerville-font">
          Welcome To <br />
          <span className="h1 text-primary">Bevington Security Solutions</span>
        </h2>
        <div className="d-flex justify-content-center">
          <p className="my-2 text-container">
            A formal friendly door security Firm, aimed to raise the standard in
            the security industry.
          </p>
        </div>
      </header>
      <main>
        <section>
          <ServicesComp />
        </section>
        {/* <section>
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
        </section> */}

        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const apiUrl = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(apiUrl);
//   const feed = await data.json();

//   return {
//     props: {
//       feed,
//     },
//     revalidate: 3600,
//   };
// };
