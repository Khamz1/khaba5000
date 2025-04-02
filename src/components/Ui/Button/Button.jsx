import React from "react";
import SButton from "./button.module.css";

function Button({ children, className }) {
  return (
    <button className={`${SButton.button} ${className}`}>{children}</button>
  );
}

export default Button;
