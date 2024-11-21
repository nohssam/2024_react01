import React, { useEffect, useRef } from 'react';

function RefTest04(props) {
  const inputRef = useRef();
  useEffect(() =>{
    // 초기값이 없어서   
    console.log(inputRef)
    inputRef.current.focus();
  },[]);
  const login = ()=> {
    alert(`환영합니다.${inputRef.current.value} ~` )
    inputRef.current.focus();
  }
  return (
    <div>
        <input 
          type='text'
          placeholder='username'
          ref={inputRef}
        />
        <button onClick={login}>로그인</button>
    </div>
  );
}

export default RefTest04;