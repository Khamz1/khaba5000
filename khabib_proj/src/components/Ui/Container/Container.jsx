import React from "react";
import s from "./container.module.css";

export const Container = ({ className, children }) => {
  return <div className={`${s.Container} ${className}`}>{children}</div>;
  
};
