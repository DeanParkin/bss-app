import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="ratio ratio-4x3">
        <iframe
          className="embed-responsive-item rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.256649558015!2d-1.8906472846515507!3d52.4744886473542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc876416baeb%3A0xf8ea65711ea0c9ae!2sThe%20Anchor%20Digbeth!5e0!3m2!1sen!2suk!4v1595371692754!5m2!1sen!2suk"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
