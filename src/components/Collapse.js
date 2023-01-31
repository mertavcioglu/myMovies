import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

function Collapse(props) {
  const [content, setContent] = useState(false);

  function contentChangeHandler() {
    setContent(!content);
  }

  return (
    <div>
      <Button
        showContent={contentChangeHandler}
        cardTitle={props.children.props.cardTitle}
        buttonId={props.href}
      />
      {content ? (
        <div className="collapse show" /*  id={props.href} */>
          <div className="card card-body">
            <Card
              key={props.children.props.id}
              cardTitle={props.children.props.cardTitle}
              cardDescription={props.children.props.cardDescription}
              cardLastUpdated={props.children.props.cardLastUpdated}
              cardImage={props.children.props.cardImage}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Collapse;
