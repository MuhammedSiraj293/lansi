"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FlippingCuboid from "@/components/Home/FlippingCuboid";
import InfoCard from "@/components/Home/InfoCard";
import Flairs from "./Flairs";
import IconCombo from "./IconCombo";

gsap.registerPlugin(ScrollTrigger);

const Lanstitut = () => {
  const ref = useRef(null);

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".boom");

    gsap.fromTo(
      elements,
      {
        autoAlpha: 0, // Start with elements invisible for a clean fade in
        y: 50, // Start position for the animation (pushed down 50px)
        scale: 0.5, // Start from half the size
      },
      {
        autoAlpha: 1, // Animate to fully visible
        y: 0, // Animate to original y position
        stagger: 0.1, // Delay between the start of each element animation
        scale: 1, // Animate to full size
        scrollTrigger: {
          trigger: ref.current,
          start: "top 400px",
          //   end: "bottom 40%",
          scrub: false, // Smooth scrubbing, syncing the scrub with the scroll bar
          markers: false, // Show ScrollTrigger markers for debugging
        },
      }
    );

    return () => {
      // Cleanup function to kill ScrollTriggers on unmount to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={ref}
      className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
      style={{ marginTop: "100px" }}
    >
      <Flairs />
      <div>
        <IconCombo name="Step 3:" />
        <h2 className="component-title mt-2">
          Know more about <br />
          <span className="primary-color">Lanstitut</span>
        </h2>
        <p
          className="para p-2"
          style={{
            maxWidth: "900px",
            lineHeight: `2`,
            marginTop: "20px",
            fontWeight: "400",
          }}
        >
          Lanstitut is India's leading German Language Institute, and you will
          join a dynamic community of healthcare professionals. Our platform
          helps you in resolving career problems ranging from learning a new
          language to handling foreign job requirements.
          <br />
          <br />
          We provide targeted support and upskilling courses to help you prepare
          for your ideal medical job overseas. Our customised courses include
          rigorous language instruction and placement help, ensuring that you
          are well-prepared for certification and job placement.
          <br />
          <br />
          With Lanstitut, you may attain your job plans and widen your horizons.
          10,000 successful students and ranks among India's top five language
          learning institutes.
        </p>
      </div>
      <div
        className="row w-100 mt-0 mt-md-3 p-md-5 p-2"
        style={{ maxWidth: "1300px" }}
      >
        <div className="col-md-3 boom">
          <InfoCard
            icon="/icons/hospital.svg"
            title="Partner Hospitals"
            count="200+"
            bgColor="#045395"
            className="bg-blue col"
          />
        </div>
        <div className="col-md-3 boom">
          <InfoCard
            icon="/icons/graduation-cap.svg"
            title="Students"
            count="10K+"
            bgColor="#FE4D01"
            className="bg-orange col"
          />
        </div>
        <div className="col-md-6 boom">
          <InfoCard
            icon="/icons/users.svg"
            title="Faculties"
            count="50+"
            bgColor="#221B1B"
            className="bg-gray col"
          />
        </div>
        <div className="col-md-6 boom">
          <InfoCard
            title="Lanstitut"
            count="4.8 ⭐⭐⭐⭐⭐"
            actionText="review us on Google"
            actionLink="https://google.com"
            className="bg-white text-black col"
          />
        </div>
        <div className="col-md-6 boom">
          <FlippingCuboid />
        </div>
      </div>
    </div>
  );
};

export default Lanstitut;
