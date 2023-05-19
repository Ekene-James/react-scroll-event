import { useEffect, useState } from "react";

function useScroll() {
  const [translation, setTranslation] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || window.scrollY;

    //you can play with any of these values to get your required result
    const innerHeight = window.innerHeight / 1.5;
    const updatedTranslation = (scrollPosition / innerHeight) * 10;

    setTranslation(updatedTranslation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return translation;
}

export default useScroll;
