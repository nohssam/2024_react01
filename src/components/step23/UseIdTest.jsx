import React, { useEffect, useId, useRef } from 'react';

// 18버전에 나옴 현존하는 리액트 훅중에 가장 쉬운 useId, 고유한 아이디를 만들때 꽤 유용하게 사용됩니다.
// input 같은 폼 요소에 접근성에 관련된 속성을 제공할 때 정말 유용하게 사용된다.
// input 요소에 아이디 속성을 제공한다든가에 필요한다. 
function UseIdTest(props) {
  //const id = useId();
  //console.log(id)
  return (
    <div>

      {/* 이러면 중복된 아이디가 존재하게 된다. */}
       <MyInput />
       {/* <MyInput /> */}
    </div>
  );
}

// function MyInput() {
//   return (
//     <div>
//         <label htmlFor='name'>이름</label>
//         <input id="name"/>
//     </div>
//   );
// }

function MyInput() {
  const id = useId();
  const ref = useRef();
  useEffect(()=>{
    // 가져올수 없다.(useRef 사용해야 한다.)
    // const element = document.querySelector(id);
    // console.log(element)

    const element = ref.current;
    console.log(element)
  },[]);

  return (
    <div>
      {/* 한개일때 */}
      <label htmlFor={id}>이름</label>
      <input id={id} ref={ref}/>


      {/* 여러개일 경우 */}
        {/* <label htmlFor={`${id}-name`}>이름</label>
        <input id={`${id}-name`}/>
        <label htmlFor={`${id}-age`}>나이</label>
        <input id={`${id}-age`}/>
         */}
    </div>
  );
}


export default UseIdTest;