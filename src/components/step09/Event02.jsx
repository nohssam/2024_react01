
// children은 React 컴포넌트의 특수한 props이다.
// 컴포넌트 태그 안에 전달된 내용을 포함한다.
// 여느태그와 닫는 태그 사이에 있는 내용을 나타낸다.
// 동적인 내용을 전달할 수 있다.
function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function Event02(props) {
    return (
        <div className="App">
            <AlertButton message="play">PlayButton</AlertButton> <br /> <br />
            <AlertButton message="upload">UploadButton</AlertButton> <br /> <br />
        </div>
    );
}

export default Event02;