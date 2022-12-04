import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import ServicesComp from "../components/ServicesComp";
import Image from "next/image";
import heroImage from "../public/imgs/bss-hero.jpg";

export default function Home() {
  const ImageCss = {
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <div>
      <SEO
        title="Home"
        description="A formal friendly door security Firm, aimed to raise the standard in the security industry."
      />
      <header className="text-light text-center">
        <div className="hero-wrapper">
          <Image
            src={heroImage}
            alt="Bevington Security Door Team"
            className="hero-image"
            priority
          />
          <div className="hero-text d-none d-xl-block">
            <h2 className="fs-5 baskerville-font">
              Welcome To <br />
              <span className="h1 text-primary">
                Bevington Security Solutions
              </span>
            </h2>

            <p className="my-2">
              A formal friendly door security Firm, aimed to raise the standard
              in the security industry.
            </p>
          </div>
        </div>
        <div className="d-block d-xl-none container">
          <h2 className="fs-5 baskerville-font">
            Welcome To <br />
            <span className="h1 text-primary">
              Bevington Security Solutions
            </span>
          </h2>

          <p className="my-2">
            A formal friendly door security Firm, aimed to raise the standard in
            the security industry.
          </p>
        </div>
      </header>
      <main>
        <section>
          <ServicesComp />
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
