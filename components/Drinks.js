import React from "react";

export default function Drinks() {
  return (
    <>
      <div className="container text-light text-center pt-3 mb-4">
        <h2 className="h2 text-primary baskerville-font">Drinks</h2>
        <div className="d-flex justify-content-center">
          <p className="text-container">
            Real and craft ales, wines, spirits, and cocktails.
            <br /> Traditional Thinking…Modern Drinking… <br /> Click below to
            view our Drinks Menu
          </p>
        </div>
        <a href="./ANCHOR_DRINKS_MENU.pdf">
          <button className="btn drinks-menu btn-lg">Drinks Menu</button>
        </a>
      </div>
    </>
  );
}
