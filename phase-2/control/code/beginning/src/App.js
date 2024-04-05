/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
import { useState } from "react"

export default function App() {
  const [currentCard, onCurrentCard] = useState({
    rank: "Ace",
    suit: "Spades"
  })

  const rank = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
  const suit = ["Diamonds", "Clubs", "Hearts", "Spades"]
  function newCard (){
      const card = {rank: randomItem(rank),
          suit: randomItem(suit)}
      onCurrentCard(card)
  }

  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card currentCard={currentCard} newCard={newCard}/>
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}

function randomItem(array){
  return array[Math.floor(Math.random() * array.length)]
}