import React, { Fragment, useContext } from "react";
import CoffeeItem from "./CoffeeItem";
import classes from "./CoffeeMenu.module.css";

const CoffeMenu = (props) => {
  const addOn = (current) => {
    props.addOn(current);
  };
  return (
    <div className={classes.menu}>
      <div>
        <h2 className={classes.head}>Menu</h2>
      </div>
      <ul className={classes.list}>
        {props.menu.map((item, i) => {
          return <CoffeeItem key={item + i} addOn={addOn} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default CoffeMenu;
