import React from "react";

const maxPageHeight = 5000;

// A functional component
const ImgComponent = (props) => {
  const randomTop = Math.floor(Math.random() * maxPageHeight); // Example: Generate a random number between 0 and 1000
  const randomLeft = Math.floor(Math.random() * 80); // Example: Generate a random number between 0 and 100

  return <img src={props.src} alt="note" width="500" height="600"></img>;
};

export default ImgComponent;
