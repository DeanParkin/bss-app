import { useState, useEffect } from "react";
//import { useRouter } from "next/router";
import Nav from "../components/Nav";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";

import CookieConsent from "react-cookie-consent";
import "../styles/main.scss";

//TODO - Remove Debugging from cookie consent for production
//TODO - update cookie consent date
//TODO - add privacy policy link

// //Loader Component for loading a page
// function PageLoading() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);

//     const handleComplete = (url) =>
//       url === router.asPath && setTimeout(() => setLoading(false), 100);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);
//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return (
//     loading && (
//       <div className="loading-Wrapper">
//         <div className="loading-icon">
//           <FontAwesomeIcon icon={faDharmachakra} />
//         </div>
//       </div>
//     )
//   );
// }

//Loader Component for loading the site
function SiteLoader() {
  const [siteLoad, setSiteLoad] = useState(true);

  useEffect(() => {
    window.addEventListener("load", (e) => {
      setTimeout(() => setSiteLoad(false), 1);
    });
  }, []);

  return (
    siteLoad && (
      <div className="loading-Wrapper">
        <div className="loading-icon">
          <FontAwesomeIcon icon={faDharmachakra} className="text-primary" />
        </div>
      </div>
    )
  );
}

//Main App Component
function MyApp({ Component, pageProps }) {
  // importing Bootstrap js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      {/* <PageLoading /> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-H9Q4C999HC"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H9Q4C999HC');`}
      </Script>

      <SiteLoader />
      <Nav>
        <Component {...pageProps} />
      </Nav>
      <CookieConsent
        disableStyles={true}
        debug={false}
        // flipButtons={true}
        location="bottom"
        // style={{ fontFamily: "Quicksand, sans-serif", textAlign: "center" }}
        buttonWrapperClasses="d-flex justify-content-end"
        buttonClasses="btn btn-primary"
        containerClasses="alert alert-primary fixed-bottom d-sm-flex justify-content-between"
        contentClasses="text-capitalize text-center d-flex fs-6"
        buttonText="I Understand"
        expires={1}
      >
        This site uses Cookies for performance improvements.
      </CookieConsent>
    </>
  );
}

export default MyApp;
