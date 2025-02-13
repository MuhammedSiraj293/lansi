import Image from "next/image";
import React from "react";

const FeatureCard = ({ featureHeading, featureDescription, featureImage }) => {
  return (
    <div
      className="p-3 "
      style={{
        backgroundColor: "#f1f1f1",
      }}
    >
      <Image src={featureImage} alt="Feature Card" width={40} height={40} />
      <h3 className="feature-heading">
        <b>{featureHeading}</b>
      </h3>
      <p className="feature-text">{featureDescription}</p>
    </div>
  );
};

export default FeatureCard;
