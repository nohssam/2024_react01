import React from 'react';
import ListCards2 from './ListCards2';

function ListCards2Ex(props) {
  const items = [{
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    thumbnail: '/img/tree-1.jpg',
  },
  {
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    thumbnail: '/img/tree-2.jpg',
  },
  {
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    thumbnail: '/img/tree-3.jpg',
  }
  ]
  return (
    <main>
      <ListCards2 items={items} />
    </main>
  );
}

export default ListCards2Ex;