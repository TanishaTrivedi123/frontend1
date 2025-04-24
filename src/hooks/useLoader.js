// useLoader.js
import { useState } from "react";

const useLoader = () => {
  const [loading, setLoading] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const showLoader = () => {
    setLoading(true);
    setIsAnimatingOut(false);
  };

  const hideLoader = () => {
    setIsAnimatingOut(true);
    setTimeout(() => setLoading(false), 500); // duration of fade-out
  };

  return { loading, showLoader, hideLoader, isAnimatingOut };
};

export default useLoader;
