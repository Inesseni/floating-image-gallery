import React, { useEffect, useState } from "react";

// A functional component
const ImgComponent = (props) => {
  //if (props.show == false) return;
  const [randomTop, setRandomTop] = useState(0);
  const [randomOffset, setRandomOffset] = useState(0);
  const [scale, setScale] = useState(props.width * 0.001);
  const [isHovered, setIsHovered] = useState(false);
  const hoverScale = scale * 1.2;

  useEffect(() => {
    const calculateRandomPosition = () => {
      const maxYOffset = 600;
      const maxXOffset = props.width * props.XOffset;

      const randomTopValue =
        Math.random() * (maxYOffset - -maxYOffset) + -maxYOffset;
      const randomOffs =
        Math.random() * (maxXOffset - -maxXOffset) + -maxXOffset;

      setRandomTop(randomTopValue);
      setRandomOffset(randomOffs);
      setScale(Math.min(props.width * 0.001, 0.35));
    };

    // Call the function when component mounts
    calculateRandomPosition();
  }, [props.width]);

  return (
    <img
      src={props.src}
      alt="note"
      style={{
        left: randomOffset,
        marginTop: randomTop,
        transform: `scale(${isHovered ? hoverScale : scale})`,
        transformOrigin: "50% 50%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></img>
  );
};

export default ImgComponent;
