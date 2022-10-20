import { LocalCafeOutlined } from "@mui/icons-material";
import React from "react";
import Modal from "../UI/Modal";
import classes from "./AddOn.module.css";

const AddOn = (props) => {
  const handle = (addprops) => {
    const item = {
      item: props.sel.item,
      addOn: addprops,
      price: props.sel[addprops],
      quantity: 1,
    };
    console.log("Cart Open");
    props.addToCart(item);
  };

  return (
    <Modal addClose={props.addClose}>
      <div className={classes.container}>
        <div className={classes.main}>
          <LocalCafeOutlined />
          <h2 className={classes.coffee}>{props.sel.item} </h2>
        </div>
        <div className={classes.add}>
          <div>Milk : {props.sel.milk}</div>
          <button className={classes.btn} onClick={() => handle("milk")}>
            Add +
          </button>
        </div>
        <div className={classes.add}>
          <div>Cream : {props.sel.cream}</div>
          <button className={classes.btn} onClick={() => handle("cream")}>
            Add +
          </button>
        </div>
        <div className={classes.add}>
          <div>Latte : {props.sel.latte}</div>
          <button className={classes.btn} onClick={() => handle("latte")}>
            Add +
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddOn;
