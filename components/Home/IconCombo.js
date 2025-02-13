"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const IconCombo = ({ name, isWhite }) => {
  const iconRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const icon = iconRef.current;
    const nameElement = nameRef.current;
    const rect = icon.getBoundingClientRect();

    // Timeline to control the sequence of animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: icon,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    tl.fromTo(
      icon,
      {
        autoAlpha: 0,
        scale: 0.5,
        opacity: 0,
      },
      {
        duration: 1.5,
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        ease: "power4.out",
        motionPath: {
          path: [
            {
              x: rect.left + 200 - rect.width / 2, // Adjusting x by an additional 200px to the right
              y: rect.top - rect.height / 2, // Using the center of the element as the reference point
            },
            {
              x: 0,
              y: 0,
            },
          ],
          curviness: 2,
          autoRotate: false,
        },
      }
    ).fromTo(
      nameElement,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div
      ref={iconRef}
      className={`flex flex-col justify-center items-center text-center`}
    >
      <Image
        src={`/assets/Logo/${isWhite ? "IconWhite" : "IconBlue"}.svg`}
        alt="logo"
        width={70}
        height={70}
        className=""
      />
      <h6 ref={nameRef} className="primary-color text-2xl font-bold">
        {name}
      </h6>
    </div>
  );
};

export default IconCombo;
