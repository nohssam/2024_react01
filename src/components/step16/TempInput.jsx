import React from 'react';

const TempInput = (
   {value, unit, onChang }
) => {
  return(
    <div className='temp-input'>
      <input 
        type='number'
        value={value}
        onChange={
          e => onChang(e.target.value)
        }
        placeholder='In ${unit}'
      />
    <span>{unit}</span>
    </div>
  )
}

export default TempInput;