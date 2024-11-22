import React, { useEffect, useRef, useState } from 'react';

function RefTest04(props) {
  const [count, setCount] = useState(0); // 전체 합산 카운트
  const [button1Clicks, setButton1Clicks] = useState(0); // 버튼 1 클릭 횟수
  const [button2Clicks, setButton2Clicks] = useState(0); // 버튼 2 클릭 횟수
  const renderCount = useRef(0);

  // count 상태가 변경될 때마다 렌더링 횟수 증가
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수 : ', renderCount.current);
  }, [count]);

  // 버튼 1 클릭 핸들러
  const handleButton1Click = () => {
    setButton1Clicks(button1Clicks + 1);
    setCount(count + 4);
  };

  // 버튼 2 클릭 핸들러
  const handleButton2Click = () => {
    setButton2Clicks(button2Clicks + 1);
    setCount(count + 3);
  };

  return (
    <div>
      <p>State1 (합계): {count}</p>
      <p>버튼 1 클릭 횟수: {button1Clicks}</p>
      <p>버튼 2 클릭 횟수: {button2Clicks}</p>
      <p>렌더링 횟수: {renderCount.current}</p>
      <button onClick={handleButton1Click}>+4 추가 (버튼 1)</button>
      <button onClick={handleButton2Click}>+3 추가 (버튼 2)</button>
    </div>
  );
}

export default RefTest04;