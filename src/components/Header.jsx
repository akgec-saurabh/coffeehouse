import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.imgdiv}>
        <img className={classes.img} src={logo} alt="logo" />
      </div>
      {/* <h1>Coffee House</h1> */}
    </div>
  );
};

export default Header;
