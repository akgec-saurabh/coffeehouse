import { chainPropTypes } from "@mui/utils";
import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = (prop) => {
    return <div onClick={props.addClose} className={classes.backdrop}></div>;
  };

  const ModalOverlay = (item) => {
    return (
      <div className={classes.modal}>
        <div>{props.children}</div>
        <button className={classes.close} onClick={props.addClose}>
          Close
        </button>
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.querySelector("#overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.querySelector("#overlays")
      )}
    </Fragment>
  );
};

export default Modal;
