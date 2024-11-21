import React, { useState, useMemo } from "react";

// useMemo란?
// useMemo는 React에서 제공하는 훅으로, 컴포넌트가 다시 렌더링될 때 특정 연산의 재계산을 방지하여 성능을 최적화하기 위해 사용됩니다.
// useMemo를 사용하면 불필요한 연산을 피하면서 상태 업데이트를 처리할 수 있습니다.

// useMemo는 다음과 같은 경우 유용합니다:

// 비싼 연산이 포함된 계산을 캐싱하고 싶을 때
// 참조값 비교로 인해 불필요한 렌더링을 방지하고 싶을 때
// useMemo는 두 가지 인수를 받습니다:

// 첫 번째: 캐싱하고 싶은 계산 (함수)
// 두 번째: 해당 계산이 다시 실행될 조건(의존성 배열)


function MemoTest01(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 비싼 연산
  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 1000;
  }, [count]); // count가 변경될 때만 다시 계산
  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Value: {expensiveValue}</p>
      <p>Typed Text: {text}</p>   텍스트 상태 값 출력
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default MemoTest01;