import React from 'react';
import MemoTest03 from './MemoTest03';
import MemoTest02 from './MemoTest02';

function MemoTest04(props) {
  return (
    <div>
      <MemoTest02 />
      <MemoTest03 />
    </div>
  );
}

export default MemoTest04;