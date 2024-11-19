import { Input, TextField } from '@mui/material';
import React from 'react';

function TestInput(props) {
  return (
    <div>
      <input onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')} /> <br /><br />

      {/* 해당 입력 요소의 값이 바뀔때 발생,  target은 이벤트가 발생한 요소, 을 가리킨다. */}
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        onChange={(e) => console.log(e.target.value)} /> <br /><br />

      <TextField id="standard-basic" label="Standard" variant="standard"
        onChange={(e) => console.log(e.target.value)} /> <br /><br />

      <TextField id="standard-basic" label="Standard" variant="standard"
        onKeyUp={(e) => console.log(e.key, 'UP')} /> <br /><br />
    </div>
  );
}

export default TestInput;