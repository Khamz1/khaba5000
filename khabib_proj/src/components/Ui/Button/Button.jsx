import React from "react";
import SButton from "./button.module.css";

function Button({ children, className, ...rest }) {
  return (
    <button className={`${SButton.button} ${className}`} {...rest}>{children}</button>
  );
}

export default Button;
