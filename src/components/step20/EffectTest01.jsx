import React, { useState } from 'react';

function EffectTest01() {
  // 상태를 정의합니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 상태를 화면에 표시 */}
      <p>총 {count}번 클릭했습니다.</p>
      {/* 버튼 클릭 시 상태 업데이트 */}
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

export default EffectTest01;