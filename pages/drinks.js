import React from "react";
import Drinks from "../components/Drinks";
import SEO from "../components/SEO";

const drinks = () => {
  return (
    <>
      <SEO
        title="Drinks"
        description="Real and craft ales, wines, spirits, and cocktails. Traditional Thinking…Modern Drinking…"
      />
      <Drinks />
    </>
  );
};

export default drinks;
