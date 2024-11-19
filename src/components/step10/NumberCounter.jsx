function NumberCounter(props) {
  let cnt = 5;
  let increment = () => {
    cnt = cnt + 1;
    console.log("cnt : ", cnt)
  }
  let decrement = () => {
    cnt = cnt - 1;
    console.log("cnt : ", cnt)
  }

  return (
    <div>
      <button onClick={increment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          cursor: "pointer",
        }}> + </button>
      <span style={{ margin: "0 20px", fontSize: "20px" }}>{cnt}</span>
      <button onClick={decrement}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          cursor: "pointer",
        }}> - </button>
    </div>
  );
}

export default NumberCounter;