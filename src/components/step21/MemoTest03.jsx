import React, { useState, useMemo } from "react";

function MemoTest03(props) {
  const [query, setQuery] = useState("");
  const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

  // 필터링된 리스트를 매 렌더링마다 계산
  const filteredItems = items.filter((item) => {
    console.log("Filtering items without useMemo...");
    return item.toLowerCase().includes(query.toLowerCase());
  });

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

export default MemoTest03;