import React from "react";
import Image from "next/image";

const maxPageHeight = 2000;

// A functional component
const ImgComponent = (props) => {
  const randomTop = Math.floor(Math.random() * maxPageHeight); // Example: Generate a random number between 0 and 1000
  const randomLeft = Math.floor(Math.random() * 100); // Example: Generate a random number between 0 and 100

  return (
    <Image
      src={props.src}
      alt="image"
      width={300}
      style={{ top: randomTop, left: `${randomLeft}%` }}
    />
  );
};

export default ImgComponent;
