import React from 'react';
import OneCard from './OneCard';
import './listCards.css'; // CSS 파일 import

function ListCards(props) {
  const course1 = {
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    thumbnail: '/img/tree-1.jpg',
  };
  const course2 = {
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    thumbnail: '/img/tree-2.jpg',
  };
  const course3 = {
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    thumbnail: '/img/tree-3.jpg',
  };
  return (
    <main>
      <div className="custom-card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <OneCard
              title={course1.title}
              description={course1.description}
              thumbnail={course1.thumbnail}
            />
            <OneCard
              title={course2.title}
              description={course2.description}
              thumbnail={course2.thumbnail}
            />
            <OneCard
              title={course3.title}
              description={course3.description}
              thumbnail={course3.thumbnail}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListCards;
