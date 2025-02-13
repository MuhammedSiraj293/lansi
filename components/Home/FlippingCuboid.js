"use client";
import { useState, useEffect } from "react";
import styles from "./FlippingCuboid.module.css";

const FlippingCuboid = () => {
  const diceFaces = [
    "https://images.pexels.com/photos/19650796/pexels-photo-19650796/free-photo-of-smiling-woman-shooting-confetti-cannon-sitting-in-the-living-room-by-the-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Path to image for face 1
    "https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Path to image for face 2
    "https://images.pexels.com/photos/9177246/pexels-photo-9177246.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Path to image for face 3
    "https://images.pexels.com/photos/27671463/pexels-photo-27671463/free-photo-of-the-view-from-a-cliff-overlooking-the-town-of-croatia.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Path to image for face 4
    "https://images.pexels.com/photos/29893440/pexels-photo-29893440/free-photo-of-delicious-berry-topped-waffles-on-breakfast-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Path to image for face 5
    "https://images.pexels.com/photos/28377644/pexels-photo-28377644/free-photo-of-photo-of-jimmy-a-jack-russell-terrier-in-kansas-city-mo-usa.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load", // Path to image for face 6
  ];

  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((currentFace) => (currentFace + 1) % diceFaces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dice}>
      <img src={diceFaces[currentFace]} alt={`Dice face ${currentFace + 1}`} />
    </div>
  );
};

export default FlippingCuboid;
