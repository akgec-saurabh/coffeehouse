import { ShoppingBagOutlined, ShoppingCart } from "@mui/icons-material";
import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  let stotal = 0;
  console.log(props.order);

  return (
    <div className={classes.cart}>
      <div className={classes.head}>
        <div className={classes.item}>Item</div>
        <div className={classes.price}>price</div>
        <div className={classes.quantity}>Quantity</div>
        <div className={classes.total}>Total</div>
      </div>
      {props.order.map((item, i) => {
        stotal += item.price * item.quantity;
        return (
          <div key={i} className={classes.data}>
            <div className={classes.aitem}>
              <div>{item.item}</div>&nbsp;:&nbsp; <div>{item.addOn}</div>
            </div>
            <div className={classes.aprice}>{item.price}</div>
            <div className={classes.aquantity}>{item.quantity}</div>
            <div className={classes.atotal}>{item.price * item.quantity}</div>
          </div>
        );
      })}

      <div className={classes.subtotal}>Total : &#8377; {stotal}</div>
      <div className={classes.btndiv}>
        <button onClick={props.bill} className={classes.btn}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
