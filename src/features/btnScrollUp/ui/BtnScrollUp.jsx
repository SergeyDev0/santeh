import React, { useState, useEffect } from "react";
import UpIcon from "../../../assets/icons/arrow-up.svg";
import "./btnScrollUp.scss";

const BtnScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goToUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className={isVisible ? "btn_up show" : "btn_up"} onClick={() => goToUp()}>
      <img className="btn_up--img" src={UpIcon} alt="Scroll to top" />
    </button>
  );
};

export default BtnScrollUp;