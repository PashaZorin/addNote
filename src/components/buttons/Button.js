import React from "react";
import "./button.scss";

const Button = ({ text, className, onClick, type }) => {
  return (
    <button
      className={["button", className].join(" ")}
      onClick={onClick}
      type={type || "button"}>
      {text}
    </button>
  );
};
export default Button;
