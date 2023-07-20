import React from "react";
import ReactDom from "react-dom";

export const CartModal = ({ children, onClose }) => {
  // console.log(onClose);
  return ReactDom.createPortal(
    <div
      className="modal fade show"
      id="exampleModalLive"
      tabIndex="-1"
      aria-labelledby="exampleModalLiveLabel"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.85)" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close ms-auto p-3"
            onClick={onClose}
          ></button>

          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
