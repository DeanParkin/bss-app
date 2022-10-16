export default function ServicesComp() {
  const serviceList = [
    {
      name: "Service 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      image: "",
    },
    {
      name: "Service 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      image: "",
    },
    {
      name: "Service 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      image: "",
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
          <div className="col mb-3">
            <div className="card border-primary">
              <img src="#" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card border-primary">
              <img src="#" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card border-primary">
              <img src="#" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
