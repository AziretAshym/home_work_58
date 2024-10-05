import Backdrop from "./Backdrop.tsx";
import * as React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ show, title, closeModal, children }) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                onClick={closeModal}
                type={"button"}
                style={{ border: "none", background: "none" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/657/657059.png"
                  alt="cross"
                  style={{ width: "10px" }}
                />
              </button>
            </div>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
