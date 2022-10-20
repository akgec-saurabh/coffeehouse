import React, { Fragment } from "react";
import Barcode from "react-barcode/lib/react-barcode";
import logo from "../assets/smalllogo.png";
import classes from "./Bill.module.css";

const bill = [
  {
    item: "Espresso",
    addOn: "milk",
    price: 60,
    quantity: 1,
  },
  {
    item: "Latte",
    addOn: "latte",
    price: 150,
    quantity: 1,
  },
  {
    item: "Cappuccino",
    addOn: "milk",
    price: 80,
    quantity: 2,
  },
  {
    item: "Latte",
    addOn: "milk",
    price: 100,
    quantity: 1,
  },
];
const Bill = (props) => {
  let stotal = 0;
  return (
    <Fragment>
      <div id={classes.container}>
        <div className={classes.bill}>
          <img className={classes.img} src={logo} alt="" />
          <div className={classes.p}>658 Sri Gopal Nath Road, WasantKunj</div>
          <div className={classes.p}>
            REG#17 TRN#1313 CSHR#00097655 STR#9852
          </div>
          <div className={classes.billheading}>BILL</div>
          <div className={classes.billr}>
            <div className={classes.billi}>Item</div>
            <div className={classes.billq}>Qty</div>
            <div className={classes.billp}>&#8377;price</div>
          </div>
          {props.order.map((item, i) => {
            stotal += item.price * item.quantity;

            return (
              <div key={i} className={classes.billd}>
                <div className={classes.billi}>
                  {item.item} - {item.addOn}
                </div>
                <div className={classes.billq}>{item.quantity}</div>
                <div className={classes.billp}>&#8377;{item.price}</div>
              </div>
            );
          })}
          <div className={classes.total}>
            <div className={classes.billi}>SubTotal</div>
            <div className={classes.billq}></div>
            <div className={classes.billp}>&#8377;{stotal}</div>
          </div>

          <Barcode value="coffee house" width={1} height={50} />

          <div className={classes.break}>
            *************************************
          </div>
          <div className={classes.feedback}>
            We would love to hear your feedback on your recent experience with
            us. This survey will only take 1 minute to complete.
          </div>
          <h3 className={classes.h3}>Share Your Feedback</h3>
          <p className={classes.p}>Have a Great Day :-)</p>
          <div className={classes.break}>
            *************************************
          </div>
        </div>
      </div>
      <div className={classes.btndiv}>
        <button onClick={props.again} className={classes.btn}>
          Order Again
        </button>
      </div>
    </Fragment>
  );
};

export default Bill;
