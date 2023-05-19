import React, { useRef } from "react";
import classes from "./frame.module.scss";
import { ReactComponent as PhoneCasing } from "./assets/phone.svg";

import imgUrl from "./assets/firstB.jpg";
import useScroll from "../hooks/useScroll";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Frame() {
  const containerRef = useRef();
  const isIntersecting = useIntersectionObserver(containerRef);
  const scrollVal = useScroll();

  const imgStyle = {
    transform: `translateY(-${isIntersecting ? scrollVal : 0}%) scale(1.3)`,
  };
  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.imgContainer}>
        <img
          src={imgUrl}
          alt="inner_img"
          className={classes.img}
          style={imgStyle}
        />
      </div>
      <div className={classes.casing}>
        <PhoneCasing />
      </div>
    </div>
  );
}

export default Frame;
