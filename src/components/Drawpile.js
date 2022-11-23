import React from "react";
import Card from "./Card";
import "./Drawpile.css";
export default function Drawpile(props) {
  const cards = props.cards.map((c) => (
    <Card
      key={c.code}
      id={c.code}
      value={c.value}
      suit={c.suit}
      img={c.image}
    />
  ));
  return <div className="Drawpile">{cards}</div>;
}
