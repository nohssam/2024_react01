import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  console.log('reducer 실행 전 상태:', state);
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      if (state >= action.payload) {
        return state - action.payload;
      } else {
        console.log('잔고 부족으로 출금 불가');
        return state;
      }
    default:
      return state;
  }
};

function UseReducerTest() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const value = parseInt(e.target.value) || 0;
          setNumber(value < 0 ? 0 : value); // 음수 방지
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: 'deposit', payload: number });
          setNumber(0); // 입력값 초기화
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          if (number > money) {
            alert('잔고가 부족합니다!');
          } else {
            dispatch({ type: 'withdraw', payload: number });
            setNumber(0); // 입력값 초기화
          }
        }}
      >
        출금
      </button>
    </div>
  );
}

export default UseReducerTest;