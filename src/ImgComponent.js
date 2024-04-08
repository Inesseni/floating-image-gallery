import React, { useEffect, useState } from "react";
const maxPageHeight = 6000;

// A functional component
const ImgComponent = (props) => {
  if (props.show == false) return;
  const [randomTop, setRandomTop] = useState(0);
  const [randomOffset, setRandomOffset] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const calculateRandomPosition = () => {
      let newScale = window.innerWidth * 0.001;
      if (newScale >= 0.4) {
        newScale = 0.4;
      }
      setScale(newScale);

      const maxXOffset = window.innerWidth * props.XOffset;
      const negXOffset = -maxXOffset * newScale;
      const maxYOffset = 500;

      const randomTopValue = Math.random() * (maxYOffset - -maxYOffset) - 300;

      const randomOffs = Math.random() * (maxXOffset - negXOffset) + negXOffset;

      setRandomTop(randomTopValue);
      setRandomOffset(randomOffs);
    };

    // Call the function when component mounts
    calculateRandomPosition();
  }, [props.XOffset]);

  //console.log(props.maxLeft);
  return (
    <img
      src={props.src}
      alt="note"
      style={{ left: randomOffset, top: randomTop, scale: scale }}
    ></img>
  );
};

export default ImgComponent;
