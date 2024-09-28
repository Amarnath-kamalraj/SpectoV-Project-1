import React from "react";
import classes from "./Header.module.css";
import Button from "../../UI/Button/Button";
import MainLogo from "../../assets/life_on_land_logo.jpg";

const Header = () => {
    return (
        <div className={classes["header-container"]}>
            <div className={classes["logo-box"]}>
                <div className={classes.logo}>
                    <img src={MainLogo} alt="Brand Logo" />
                </div>
                <p>LIFE ON LAND</p>
            </div>
            <ul className={classes["list-box"]}>
                <li>Home</li>
                <li>About</li>
                <li>Problem</li>
                <li>Goals</li>
                <li>Solution</li>
                <li>Contact</li>
            </ul>
            <div className={classes.action}>
                <Button>Donate</Button>
            </div>
        </div>
    );
};

export default Header;
