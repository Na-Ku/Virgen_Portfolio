import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".up");
    if (this.scrollY >= 560) scrollUp.classList.add("show-up");
    else scrollUp.classList.remove("show-up");
  });

  return (
    <a href="#.." className="up">
      <i className="uil uil-arrow-up up-icon"></i>
    </a>
  );
};

export default ScrollUp;
