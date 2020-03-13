import React from "react";

const Card = props => {
  console.log("Card received props: ", props.players);

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Country: {props.country}</h3>
      <h4>Searches: {props.searches}</h4>
      <hr></hr>
    </div>
  );
};

export default Card;
