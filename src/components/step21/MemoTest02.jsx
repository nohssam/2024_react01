import React, { useState, useMemo } from "react";

// 1.초기 렌더링:
// query는 빈 문자열("")이고, filteredItems는 items 전체 리스트를 반환합니다.
// console.log("Filtering items...")이 한 번 실행됩니다.

// 2.사용자가 검색어 입력:
// query 상태가 변경됩니다.
// useMemo의 의존성 배열 [query]가 업데이트되어 필터링 연산이 실행됩니다.
// 필터링된 결과를 계산하고 캐싱합니다.

// 3.query가 변경되지 않는 경우:
// 사용자가 다른 이벤트를 트리거해도(예: 다른 상태가 변경되거나 리렌더링) 필터링 연산은 실행되지 않습니다.
// filteredItems는 캐싱된 값을 반환합니다.

function MemoTest02(props) {
  const [query, setQuery] = useState("");
  const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

  // 필터링된 리스트를 메모이제이션
  const filteredItems = useMemo(() => {
    console.log("Filtering items with useMemo...");
    return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]); // query가 변경될 때만 필터링 수행

  return (
    <div>
      <h1>useMemo Filter Example</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MemoTest02;