import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, className, type }) => {
    return (
        <button className={`${classes.btn} ${className}`} type={type}>
            {children}
        </button>
    );
};

export default Button;
