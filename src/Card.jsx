import React, { useState } from "react";

const Cards = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [answerColor, setAnswerColor] = useState("");

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, flashcards.length - 1)
    );
    setShowAnswer(false);
    setUserAnswer("");
    setAnswerColor("");
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setShowAnswer(false);
    setUserAnswer("");
    setAnswerColor("");
  };

  const cardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const checkAnswer = () => {
    if (
      userAnswer.trim().toLowerCase() ===
      flashcards[currentCardIndex].answer.toLowerCase()
    ) {
      setAnswerColor("green");
    } else {
      setAnswerColor("red");
    }
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="card">
      <div className="flashcard" onClick={cardClick}>
        {showAnswer ? (
          <h2>{currentCard.answer}</h2>
        ) : (
          <h2>{currentCard.question}</h2>
        )}
      </div>
      {
        <div>
          <div className="input-container">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              style={{ borderColor: answerColor }}
            />
            <button className="btn" onClick={checkAnswer}>
              Check
            </button>
          </div>
        </div>
      }
      <div className="buttons">
        <button
          className="btn"
          onClick={prevCard}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={nextCard}
          disabled={currentCardIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
