import React from 'react';

// 이벤트 핸들러는 사용자가 마우스를 클릭하거나 입력상자에서 키보들르 타이핑하는 등 사용자와의
// 상호작용에 따라 실행되는 사용자 정의 함수
// ** 이벤트 핸들러를 추가하기 위해서는 먼저 함수를 정의하고 이를 JSX태그에 props 형태로 전달한다.
function Event01(props) {
    // 사용자 정의 함수(이벤트 핸들러)
    function heandleClick() {
        alert("눌렀네")
    }
    return (
        <div className='App'>
            <button onClick={heandleClick}>Click me</button><br /><br />
            <button onClick={function heandleClick2() { alert("눌렀네2") }}>눌러주세요2 </button ><br /><br />
            <button onClick={() => { alert("눌렀네3") }}>눌러주세요3 </button ><br /><br />
        </div>
    );
}

export default Event01;