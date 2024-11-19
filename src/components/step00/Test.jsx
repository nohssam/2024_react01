import React from 'react';

function Test(props) {
  const name = '고길동'
  return (
    <div className='App'>
      <h1> {name}님, 환영합니다.</h1>
      <h2> 열심히 리액트를 공부해 봅시다.</h2>
    </div>
  );
}

export default Test;