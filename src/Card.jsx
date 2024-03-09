import React, { useState } from 'react';

const Cards = ({ flashcards }) => {
  const [currentCardNum, setcurrentCardNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashcards[currentCardNum];

  const nextCard = () => {
    let index;
    do {
      index = Math.floor(Math.random() * flashcards.length);
    } while (index === currentCardNum);
    setcurrentCardNum(index);
    setShowAnswer(false);
  };

  const cardClick = () => {
    setShowAnswer(true);
  };

  return (
    <div className="card">
      <div className="flashcard" onClick={cardClick}>
          <h2>{currentCard.question}</h2>
        {showAnswer && (
            <p>{currentCard.answer}</p>
        )}
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default Cards;