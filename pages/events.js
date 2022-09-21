import React from "react";
import Events from "../components/Events.js";
import SEO from "../components/SEO";

const events = () => {
  return (
    <>
      <SEO
        title="Events"
        description="The Anchor, Digbeth is a place of comfort to enjoy real ale, ciders, craft beers, wine, spirits and even cocktails, modern drinking in a traditional boozer."
      />
      <Events />
    </>
  );
};

export default events;
