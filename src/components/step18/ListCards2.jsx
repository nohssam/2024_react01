import React from 'react';
import OneCard from './OneCard';
import './listCards.css'; // CSS 파일 import

function ListCards2({ items }) {
  const [card1, card2, card3] = items;
  return (
    <div className="custom-card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <OneCard {...card1} />
          <OneCard {...card2} />
          <OneCard {...card3} />
        </div>
      </div>
    </div>
  );
}

export default ListCards2;
