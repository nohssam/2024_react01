import { useState, useEffect } from 'react';

function EffectTest05(props) {
  const [data, setData] = useState([]); // API에서 가져온 데이터를 저장
  const [error, setError] = useState(null); // 에러 상태를 관리

  useEffect(() => {
    // API 호출
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data)) // 데이터 설정
      .catch((error) => setError(error.message)); // 에러 설정
  }, []); // 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행

  if (error) {
    return <p>에러 발생: {error}</p>;
  }

  if (data.length === 0) {
    return <p>로딩 중...</p>;
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>가격: ${item.price || 'N/A'}</p>
          <img src={item.image_link} alt={item.name} width="100" />
        </li>
      ))}
    </ul>
  );
}

export default EffectTest05;