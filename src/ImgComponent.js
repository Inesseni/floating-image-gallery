import React, { useEffect, useState } from "react";
const maxPageHeight = 5000;

// A functional component
const ImgComponent = (props) => {
  const [randomTop, setRandomTop] = useState(0);
  const [randomLeft, setRandomLeft] = useState(0);

  useEffect(() => {
    // Function to calculate random top and left values
    const calculateRandomPosition = () => {
      const randomTopValue = Math.floor(Math.random() * maxPageHeight) - 300;
      const randomLeftValue =
        Math.floor(Math.random() * props.maxLeft) - props.minLeft;

      setRandomTop(randomTopValue);
      setRandomLeft(randomLeftValue);
    };

    // Call the function when component mounts
    calculateRandomPosition();
  }, [props.maxLeft, props.minLeft]);

  return (
    <img
      src={props.src}
      alt="note"
      style={{ top: randomTop, left: randomLeft, scale: props.scale }}
    ></img>
  );
};

export default ImgComponent;
