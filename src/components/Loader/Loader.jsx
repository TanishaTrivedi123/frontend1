// Loader.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.scss";

const Loader = ({ isAnimatingOut }) => {
  const loaderRef = useRef();

  return (
    <div ref={loaderRef} className="loader-wrapper">
      <figure>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </figure>
    </div>
  );
};

export default Loader;
