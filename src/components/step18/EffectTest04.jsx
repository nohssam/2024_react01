import React, { useState, useEffect } from 'react';
// 1.초기 렌더링
// 컴포넌트가 처음 렌더링됩니다.
// console.log("컴포넌트 렌더링 발생") 출력.
// useEffect는 실행됩니다(count의 초기값 0로 인해 한 번 실행).

//2. setCount 호출
// Count 증가 버튼을 클릭하면 setCount가 호출되어 상태가 변경됩니다.
// 상태 변경으로 인해 컴포넌트가 다시 렌더링됩니다.
// 렌더링이 끝난 후 useEffect가 실행됩니다.

//3. setText 호출
// 텍스트 입력 필드에서 값을 입력하면 setText가 호출됩니다.
// 상태가 변경되어 컴포넌트가 다시 렌더링됩니다.
// 그러나 useEffect는 실행되지 않습니다(의존성 배열에 text가 없기 때문).

function EffectTest04(props) {
  const [count, setCount] = useState(0); // 상태 관리
  const [text, setText] = useState(""); // 입력값 관리
  console.log("컴포넌트 렌더링 발생");

  // useEffect는 렌더링 이후 실행됩니다.
  useEffect(() => {
    console.log(`useEffect 실행: count가 ${count}로 변경됨`);
  }, [count]); // count가 변경될 때만 실행
  return (
    <div>
      <h1>useState와 useEffect 비교</h1>
      {/* count 상태 변경 */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count 증가</button>

      {/* 텍스트 입력 */}
      <p>텍스트 입력: {text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>

  );
}

export default EffectTest04;