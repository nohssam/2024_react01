import React, { useRef, useState } from 'react';

function RefTest01(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("렌더링");
  // 아무리 렌더링 해도 값은 0 이다.
  console.log(countRef);

  const statePlus = () => {
    setCount(count + 1);
  }
  const refPlus = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current)
  }
  return (
    <div>
      <p>State : {count} </p>
      <p>Ref : {countRef.current} </p>
      <button onClick={statePlus}>State 올려</button>
      {/* 렌더링을 하지 않기때문에 화면은 변하지 않는다. 
      State버트을 누르면 리 렌더링 하기 때문에 변한 값이 보인다.*/}
      <button onClick={refPlus}>Ref 올려</button>
    </div>
  );
}

export default RefTest01;