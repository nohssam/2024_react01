import React, { useEffect, useState } from 'react';

function EffectTest02(props) {
  const [count, setCount] = useState(0);

  // useEffect는 React에서 제공하는 Hook 중 하나로, 함수형 컴포넌트에서 
  // 사이드 이펙트(side effects)를 처리할 수 있도록 도와줍니다. 
  // 여기서 "사이드 이펙트"란 컴포넌트의 렌더링 외의 작업(예: 데이터 가져오기, DOM 수정, 구독 설정 등)을 의미합니다.
  // 1. useEffect는 상태 변경으로 인해 발생한 렌더링 이후에 실행됩니다.
  // 2. 의존성 배열을 통해 특정 상태나 속성의 변화에만 반응하도록 제한

  // useEffect(() => {
  //   // 실행할 작업
  //   return () => {
  //     // 정리(clean-up) 작업
  //   };
  // }, [의존성 배열]);

  // 의존성 배열이 없으므로 갱신 될때마다 호출된다.
  // 빈 배열 = []  이면 처음 한번하고 다시 호출 안함.
  useEffect(() => {
    document.title = `총 ${count}번 클릭 했습니다.`;
  }, []);
  return (
    <div>
      <p> 총 {count}번 클릭.</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>클릭</button>
    </div>
  );
}

export default EffectTest02;