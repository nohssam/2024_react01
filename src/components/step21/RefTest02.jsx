import React, { useRef, useState } from 'react';

function RefTest02(props) {
  const [renderer, setReanderer] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const refPlus = () => {
    countRef.current = countRef.current + 1;
    console.log('ref : ', countRef.current);
  };

  const varPlus = () => {
    countVar = countVar + 1;
    console.log('var : ', countVar);
  };
  const doReander = () => {
    setReanderer(renderer + 1);
  };

  const printResult = () => {
    console.log(`ref:${countRef.current},  var : ${countVar}`)
  };
  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>

      {/* 둘다 콘솔창은 증가하지만 리렌더링이 없어서 화면은 변화가 없다. 
          그래서 레더링할 useState를 만들었지만, ref은 올라 가고 var 렌더링 될때마다 0이라서 그대로다  */}
      <button onClick={refPlus}>Ref 올려</button>
      <button onClick={varPlus}>Var 올려</button>
      <button onClick={doReander}>렌더링 하자</button>
      <button onClick={printResult}>결과 출력</button>
    </div>
  );
}

export default RefTest02;