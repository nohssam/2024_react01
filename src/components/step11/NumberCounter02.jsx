import { Button } from "@mui/material";


function NumberCounter02(props) {

  function handleClick() {
    console.log('Event1');
  }
  return (
    <div>
      {/* <button onClick={handleClick}>Button1</button>
          <button onClick={() => { console.log('Event2') }}>Button2</button> */}
      <br /> <br />
      <Button variant="contained" onClick={handleClick}>버튼 1 </Button> <br /> <br />
      <Button variant="outlined" onClick={() => { console.log('Event2') }}>버튼 2 </Button>
    </div>
  );
}

export default NumberCounter02;