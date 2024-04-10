"use client";
import styles from "./page.module.scss";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import { common, rare, legendary } from "@/imgArrays";
import ImgComponent from "@/ImgComponent";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      {windowWidth && (
        <div>
          <div ref={plane1} className={styles.plane}>
            {common.map((src, index) => (
              <ImgComponent
                key={index}
                src={src}
                show={true}
                XOffset={0.5}
                width={windowWidth}
              />
            ))}
          </div>

          <div ref={plane2} className={styles.plane}>
            {rare.map((src, index) => (
              <ImgComponent
                key={index}
                src={src}
                show={true}
                XOffset={0.35}
                width={windowWidth}
              />
            ))}
          </div>

          <div ref={plane3} className={styles.plane}>
            {legendary.map((src, index) => (
              <ImgComponent
                key={index}
                src={src}
                show={true}
                XOffset={0.2}
                width={windowWidth}
              />
            ))}
          </div>

          <div className={styles.title}>
            <h1>P.S. from the streets</h1>
            <p>Notes collected by Ines Hilz</p>
          </div>
        </div>
      )}
    </main>
  );
}
