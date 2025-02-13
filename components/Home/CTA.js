"use client";
import React from "react";
import IconCombo from "./IconCombo";

const CTA = () => {
  return (
    <div
      className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
      style={{ marginTop: "100px" }}
    >
      <div>
        <IconCombo />
        <h4
          className="p-2"
          style={{
            maxWidth: "800px",
            lineHeight: `2`,
            marginTop: "20px",
            marginBottom: "30px",
            fontWeight: "500",
          }}
        >
          Join The
          <span
            className="primary-color"
            style={{
              fontWeight: "bold",
            }}
          >
            <b>{" Lanstitut Family "}</b>
          </span>
          breaking
          <br />
          the language barrier every day and securing lives
        </h4>
        <div className="btn btn-primary px-5 py-2">Call now</div>
      </div>
    </div>
  );
};

export default CTA;
