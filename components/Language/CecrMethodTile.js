"use client";
import React from "react";

const CecrMethodTile = ({
  bgColor,
  isOpened,
  title,
  firstlevelheading,
  firstleveldesc,
  secondlevelheading,
  secondleveldesc,
}) => {
  const [show, setShow] = React.useState(isOpened || false);
  return (
    <div
      className="px-md-5 py-md-4 p-2 pt-3 mb-2"
      style={{
        borderRadius: "6px",
        backgroundColor: bgColor,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        onClick={() => setShow(!show)}
      >
        <span className=" para m-0 text-white pb-2">
          <b>{title}</b>
        </span>
      </div>
      {show && (
        <div>
          <p
            className="mt-3 p-2"
            style={{
              fontSize: "1rem",
              color: "#fff",
            }}
          >
            <b>{firstlevelheading}</b>
            <br />
            {firstleveldesc}
            <br />
            <br />
            <b>{secondlevelheading}</b>
            <br />
            {secondleveldesc}
          </p>
        </div>
      )}
    </div>
  );
};

export default CecrMethodTile;
