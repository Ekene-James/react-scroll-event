import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useScroll from "../hooks/useScroll";
import skeleton from "./assets/skeleton.webp";
import main from "./assets/main.webp";

function Second() {
  const containerRef = useRef();

  const [multiplier, setmultiplier] = useState(5);
  const [maxWidth, setmaxWidth] = useState(82);

  const isIntersecting = useIntersectionObserver(containerRef, 0.5);
  const scrollVal = useScroll();

  let width = scrollVal * multiplier;
  if (width >= maxWidth) width = maxWidth;

  //check if on mobile screen
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth <= 767) {
        setmultiplier(12);
        setmaxWidth(100);
      }
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgStyle = {
    width: `${isIntersecting ? width : width >= maxWidth ? maxWidth : 0}%`,
  };
  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.imgContainer}>
        <img src={skeleton} alt="img1" className={classes.img1} />
        <img src={main} alt="img2" className={classes.img2} style={imgStyle} />
      </div>
    </div>
  );
}

export default Second;
