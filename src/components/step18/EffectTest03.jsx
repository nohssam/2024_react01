import React, { useEffect, useState } from 'react';

// useState와 useEffect는 서로 보완적으로 사용됩니다. 
// useState로 관리하는 값이 변경되었을 때,
// useEffect를 통해 그 값을 기반으로 추가 작업(DOM 업데이트, API 호출 등)을 처리할 수 있습니다.

// useState는 상태를 관리하고, useEffect는 상태 변경 시 추가 작업을 처리
function EffectTest03(props) {
  const [count, setCount] = useState(0);
  // count 상태가 변경될 때마다 실행
  useEffect(() => {
    console.log(`Count가 ${count}로 업데이트되었습니다.`);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectTest03;