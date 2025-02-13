"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Flairs from "./Flairs";
import IconCombo from "./IconCombo";

const FirstCard = () => {
  const ref = useRef(null); // Reference to the component's container

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".appear"); // Select all elements with the 'appear' class
    const element = ref.current.querySelectorAll(".slow-appear"); // Select all elements with the 'appear' class

    gsap.fromTo(
      elements,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 3, // Duration for each animation
        stagger: 0.2, // Delay between the start of each element's animation
        ease: "power3.out", // Smoothing out the animation
      }
    );
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: 30,
        scale: 0.5,
        rotation: -45,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        delay: 1,
        rotation: 0,
        duration: 1, // Duration for each animation
        stagger: 0.1, // Delay between the start of each element's animation
        ease: "power3.out", // Smoothing out the animation
      }
    );
  }, []);

  return (
    <div ref={ref} className="first-card w-100 position-relative">
      <Flairs />
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <IconCombo name="Lanstitut" cl="slow-appear" />
        <div className="my-3" />
        <h1 className="linear-text page-heading text-center appear">
          Learn. Qualify.
          <br />
          Work Abroad.
        </h1>
        <h2 className="page-sub text-center mt-md-4 mt-2 linear-text appear">
          YOUR COMPLETE CAREER PARTNER
        </h2>
        <p className="mt-md-5 mt-3 appear">
          From language training to international job placement, we provide
          <br />
          end-to-end services.
        </p>
        <div className="my-3" />
        <div className="d-flex justify-content-center w-100">
          <div className="d-flex justify-content-center flex-column">
            <button className="btn btn-primary mt-md-5 px-5 py-2 appear text-white">
              Call now
            </button>
            <span className="pt-3 text-center appear">Learn more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
