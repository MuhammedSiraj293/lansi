"use client";
import Image from "next/image";

function FeatureCard({ title, description, featureImage, bgColor, color }) {
  return (
    <div
      className={` p-md-5 p-2 rounded shadow my-3 h-100 d-flex align-items-center  text-center`}
      style={{
        zIndex: 1,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: bgColor || "",
        color: color || "",
      }}
    >
      <div>
        {featureImage && (
          <Image
            src={featureImage}
            alt="Feature Card"
            width={150}
            height={150}
          />
        )}
        <h2 className="h4 fw-bold mb-2 feature-heading">{title}</h2>
        {description && description.length > 0 && (
          <p
            className="pt-2 feature-text"
            style={{
              color: color || "",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
