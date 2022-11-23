import React, { useState, useEffect } from "react";
import "./Gameboard.css";
import axios from "axios";
import Drawpile from "./Drawpile";
import { seed } from "../seedCards";
export default function Gameboard() {
  const [cards, setCards] = useState(seed);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw/?count=15"
      );
      console.log(response.data.cards);
      setCards(response.data.cards);
    }
    getData();
  }, []);
  return (
    <div className="Gameboard">
      <Drawpile cards={cards} />
      {/* 
      <Player/>
      <Player/>
      */}
    </div>
  );
}
