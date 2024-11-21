import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1)

  // 의존성 배열이 없는 경우:
  // 상태인 count가 변경될 때마다 컴포넌트가 리렌더링되며, useEffect가 실행됩니다.
  // 따라서, console.log는 컴포넌트가 처음 렌더링된 후, 그리고 setCount로 상태가 변경될 때마다 실행됩니다.
  useEffect(() => {
    console.log('렌더링 수 : ', renderCount.current)
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <p>State : {count} </p>
      <button onClick={() => setCount(count + 1)}>State 올려</button>
    </div>
  );
}

export default RefTest03;