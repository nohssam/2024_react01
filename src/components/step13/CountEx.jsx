import { Button } from '@mui/material';
import React, { useState } from 'react';

function CountEx(props) {

  let count = 0
  const setCount = (num) => {
    count = num;
    console.log(count);
  }
  // const [count, setCount] = useState(5)
  return (
    <div>
      <h2>Count : {count} </h2>
      <Button variant="outlined" onClick={() => setCount(count + 1)}> + </Button>
      <Button variant="outlined" onClick={() => setCount(count - 1)}> - </Button>
    </div>
  );
}

export default CountEx;