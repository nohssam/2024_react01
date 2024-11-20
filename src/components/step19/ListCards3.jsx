import React from 'react';
import OneCard2 from './OneCard2';
import './listCards.css'; // CSS 파일 import
import CardCom from './CardCom';

function ListCards3({ items }) {
  const [card1, card2, card3] = items;
  // return (
  //   <div className="custom-card">
  //     <div className="card__header">강의 목록</div>
  //     <div className="card__body">
  //       <div className="courses">
  //         <OneCard2 {...card1} />
  //         <OneCard2 {...card2} />
  //         <OneCard2 {...card3} />
  //       </div>
  //     </div>
  //   </div>
  // );

  {/*       
      <OneCard2 title="강의 목록">
        해당 내용은 OneCard2의 children 의 전달된다.
        <div>Hello React~</div>
      </OneCard2> 
      */}
  return (
    <CardCom title="강의 목록">
      <div className="courses">
        <OneCard2 {...card1} />
        <OneCard2 {...card2} />
        <OneCard2 {...card3} />
      </div>
    </CardCom>
  )
}

export default ListCards3;
