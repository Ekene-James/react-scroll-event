import { useEffect, useState } from "react";

function useScroll() {
  const [translation, setTranslation] = useState(0);

  const handleScroll = (e) => {
    // e?.touches only has values on mobile screen, so its used to check scroll
    //on mobile screens since scroll event doesnt work on mobile
    const scrollPosition = e?.touches?.length
      ? e.touches[0].clientY
      : window.scrollY;

    //you can play with any of these values to get your required result
    const innerHeight = window.innerHeight / 1.5;
    const updatedTranslation = (scrollPosition / innerHeight) * 10;

    setTranslation(updatedTranslation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //touch move for mobile device
    window.addEventListener("touchmove", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return translation;
}

export default useScroll;
