import React from 'react';

function CardCom({ title, children }) {
  return (
    <div className="custom-card">
      <div className="card__header">{title}</div>
      <div className="card__body">{children}</div>
    </div>
  );
}

export default CardCom;