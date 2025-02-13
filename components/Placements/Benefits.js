import Image from "next/image";
import React from "react";

const Benefits = ({ title, description, featureImage }) => {
  return (
    <div
      className="pb-md-0 p-md-5 p-2 rounded shadow text-start my-3 h-100 row"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 1,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="col-md-8 col-12">
        <h2 className="h4 fw-bold mb-2 feature-heading">{title}</h2>
        {description && description.length > 0 && (
          <p className="pt-2 feature-text text-start">{description}</p>
        )}
      </div>
      <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
        {featureImage && (
          <Image
            src={featureImage}
            alt="Benefit Card"
            width={150}
            height={100}
          />
        )}
      </div>
    </div>
  );
};

export default Benefits;
