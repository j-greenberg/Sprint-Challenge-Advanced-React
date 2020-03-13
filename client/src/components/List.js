import React from "react";
import Card from "./Card";

const List = props => {
  List.defaultProps = [];
  console.log("List received props: ", props.players);

  return (
    <div>
      <h3>List of Players:</h3>
      {props.players.map(object => (
        <Card
          key={object.id}
          name={object.name}
          country={object.country}
          searches={object.searches}
        />
      ))}
    </div>
  );
};

export default List;
