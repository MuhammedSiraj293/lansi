import Image from "next/image";
import React from "react";

const CountriesComponent = ({ src, name, manyMore }) => {
  return (
    <>
      {manyMore ? (
        <div
          className="country-box"
          style={{
            height: "64px",
          }}
        >
          <p className="m-0 country-name">+ More</p>
        </div>
      ) : (
        <div className="country-box">
          <Image src={src} alt="Germany" width={40} height={40} />
          <p className="country-name">{name}</p>
        </div>
      )}
    </>
  );
};

export default CountriesComponent;
