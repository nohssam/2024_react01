import React, { useState } from 'react';

function Pinn(props) {
  const [isPinned,  setPinned] = useState(false)

  const togglePinned = () => {
    setPinned(!isPinned)
  }
  return (
    <div className='App'>
      <button onClick={togglePinned}>{isPinned && 'V'} Pinn This!</button>
    </div>
  );
}

export default Pinn;