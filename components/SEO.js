import React from "react";
import Head from "next/dist/shared/lib/head";
import Script from "next/script";

const SEO = ({ title, description }) => {
  const siteTitle = `The Anchor, Digbeth`;
  const pageTitle = `${siteTitle} | ${title}`;
  return (
    <>
      <Head>
        {/* //TODO create properties to update the title, description, and Open Graph tags */}
        {/* <title>{pageTitle}</title>
        <meta name="description" content={description} /> */}
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="Plan;D" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description} />

        <meta property="og:locale" content="en_GB" />
        <meta name="author" content="Plan;D"></meta>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default SEO;
