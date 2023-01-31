import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card" style={{ width: "16rem", minHeight: "30rem" }}>
      <img src={props.cardImage} className="card-img-top" alt="Img Alt" />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardDescription}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.cardLastUpdated}</small>
      </div>
    </div>
  );
}

// Card.defaultProps = {
//   cardTitle: "***Card Title***",
//   cardDescription: "***Card Description***",
//   cardLastUpdated: "***Card Last Updated***",
// };

// Card.propTypes = {
//   cardTitle: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string,
//   cardLastUpdated: PropTypes.string,
// };

export default Card;
