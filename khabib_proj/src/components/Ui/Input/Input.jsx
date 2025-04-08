import React from "react";
import s from "./Input.module.css";

export const Input = ({ className, ...props }) => {
  return <input className={`${s.Input} ${className}`} {...props} />;
};
