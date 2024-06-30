import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchImages } from '../services/api';

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());

  useEffect(() => {
    const getImages = async () => {
      const images = await fetchImages();
      console.log('Images:', images);
      setCards(images);
    };

    getImages();
  }, []);

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  const handleClick = (cardId) => {
    if (clickedCards.has(cardId)) {
      setCurrentScore(0);
      setClickedCards(new Set());
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards(new Set(clickedCards).add(cardId));
      shuffleCards();
    }
  };

  return (
    <div className="card-container">
      <div className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      {cards.map((card, index) => (
        <Card key={index} image={card.image} text={card.text} onClick={() => handleClick(card.text)} />
      ))}
    </div>
  );
};

export default CardContainer;
