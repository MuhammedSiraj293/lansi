import React from "react";

const Flairs = () => {
  return (
    <>
      <div
        className="blue-flair position-absolute"
        style={{
          zIndex: -1,
          position: "absolute",
        }}
      />
      <div
        className="blue-flair position-absolute"
        style={{
          top: "20%",
          right: "10%",
          transform: "rotate(180deg)",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <div
        className="yellow-flair position-absolute right-0 bottom-0"
        style={{
          zIndex: -1,
          position: "absolute",
        }}
      />
    </>
  );
};

export default Flairs;
