import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className="btn btn-primary w-100"
        onClick={props.showContent}
        style={{ minWidth: "18.5rem", marginTop: "0.5rem" }}
        // type="button"
        // data-bs-toggle="collapse"
        // data-bs-target={"#".concat(props.buttonId)} // data-bs-target={`#${props.buttonId}`}
        // aria-expanded="false"
        // aria-controls={props.buttonId}
      >
        {props.cardTitle}
      </button>
    </div>
  );
}

export default Button;
