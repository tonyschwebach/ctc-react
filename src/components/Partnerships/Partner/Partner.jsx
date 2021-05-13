import React from "react";

const Partner = (props) => {
  const imageSrc = require("../../../Assets/images/logos/"+props.image)

  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <img src={imageSrc.default} alt={props.name} />
      <p>{props.name}</p>
    </a>
  );
};

export default Partner;
