import React from "react";
import styled from "styled-components";
import classNames from "classnames";

// Styles
const StyledToast = styled.div`
  bottom: 0;
  right: 0;

  .btn-close {
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    opacity: 0.85;
  }
`;

const Toast = ({ handleClose, conf }) => {
  const { heading, body, type, visible } = conf;

  return (
    <StyledToast
      className={classNames(
        "toast align-items-center text-white position-absolute",
        { "d-flex": visible },
        { hidden: !visible },
        { "bg-success": type === "success" },
        { "bg-alert": type === "alert" }
      )}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">
          <h3 className="text-white">{heading}</h3>
          <p className="text-white">{body}</p>
        </div>
        <button
          type="button"
          className="btn-close me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={handleClose}
        />
      </div>
    </StyledToast>
  );
};

export default Toast;
