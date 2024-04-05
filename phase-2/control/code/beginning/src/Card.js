export default function Card({currentCard, newCard}) {
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: (currentCard.suit == "Clubs") || (currentCard.suit === "Spades") ? "solid black" : "solid red", borderRadius: "10px"
        }}>
            {`${currentCard.rank} of ${currentCard.suit}`}
            <button onClick={newCard}>Nah.</button>
        </h2>
    )
  }