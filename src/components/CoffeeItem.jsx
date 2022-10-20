import React from "react";
import classes from "./CoffeeItem.module.css";

const CoffeeItem = (props) => {
  const addOnHandler = () => {
    props.addOn(props.item);
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.item.item}</h3>
      </div>
      <button className={classes.btn} onClick={addOnHandler}>
        Add +
      </button>
    </li>
  );
};

export default CoffeeItem;
