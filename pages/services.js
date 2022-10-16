import ServicesComp from "../components/ServicesComp";
import SEO from "../components/SEO";

export default function services() {
  return (
    <>
      <SEO
        title="Services"
        description="A formal friendly door security Firm, aimed to raise the standard in the security industry."
      />
      <section className="container">
        <ServicesComp />
      </section>
    </>
  );
}
