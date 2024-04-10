import React, { useEffect, useState } from "react";

// A functional component
const ImgComponent = (props) => {
  const [randomTop, setRandomTop] = useState(0);
  const [randomOffset, setRandomOffset] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const calculateRandomPosition = () => {
      const maxYOffset = 500;
      const maxXOffset = 10 * props.XOffset;
      const negXOffset = -maxXOffset * 0.01;

      const randomTopValue = Math.random() * (maxYOffset - -maxYOffset) - 300;

      const randomOffs = Math.random() * (maxXOffset - negXOffset) + negXOffset;

      setRandomTop(randomTopValue);
      setRandomOffset(randomOffs);
    };

    // Call the function when component mounts
    calculateRandomPosition();
  }, []);

  //console.log(props.maxLeft);
  return (
    <img
      src={props.src}
      alt="note"
      style={{ left: randomOffset, top: randomTop, scale: 0.2 }}
    ></img>
  );
};

export default ImgComponent;
