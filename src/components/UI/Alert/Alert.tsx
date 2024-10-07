import React from "react";

interface Props extends React.PropsWithChildren {
  type: "primary" | "success" | "danger" | "warning";
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  return (
    <div
      className={`alert alert-${type} d-flex align-items-center justify-content-between`}
    >
      <p className={"p-0 m-0"}>{children}</p>
      {onDismiss && (
        <button
          type={"button"}
          style={{ border: "none", background: "none" }}
          onClick={onDismiss}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/657/657059.png"
            alt="cross"
            style={{ width: "10px" }}
          />
        </button>
      )}
    </div>
  );
};

export default Alert;
