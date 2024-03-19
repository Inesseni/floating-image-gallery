import React from "react";

const maxPageHeight = 5000;

function randomNormalDistribution(mean, deviation) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * deviation + mean;
}

// A functional component
const ImgComponent = (props) => {
  const randomTop = Math.floor(Math.random() * maxPageHeight) - 300; // Example: Generate a random number between 0 and 1000
  const randomLeft = Math.floor(Math.random() * props.maxLeft) - props.minLeft; // Example: Generate a random number between 0 and 100
  /*
  
  const windowHeight = maxPageHeight; // Height of the window
  const meanTop = 0; // Centering around the vertical middle axis
  const deviationTop = windowHeight / 4; // Adjust this value for the desired spread
  
  // Generate random top position centered around the middle of the page
  //const randomTop = randomNormalDistribution(meanTop, deviationTop);
  
  // Generate random left position (you can adjust this as needed)
  const meanLeft = 0; // Centered horizontally
  const deviationLeft = 800; // Adjust this value for the desired spread
  const randomLeft = randomNormalDistribution(meanLeft, deviationLeft);
  */

  return (
    <img
      src={props.src}
      alt="note"
      style={{ top: randomTop, left: randomLeft, scale: props.scale }}
    ></img>
  );
};

export default ImgComponent;
