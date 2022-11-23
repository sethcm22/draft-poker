import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div>
      <img
        className="Card"
        onClick={() => {
          console.log(`Clicked ${props.value} of ${props.suit}`);
        }}
        src={props.img}
        alt={`${props.value} of ${props.suit}`}
      />
    </div>
  );
}
