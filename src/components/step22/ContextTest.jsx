import React, { useState } from 'react';
import './contextTest.css'
import Page from './Page';

import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

function ContextTest(props) {
  const [isDark, setIsDark] = useState(false)
  return (

    // <Page isDark={isDark} setIsDark={setIsDark} />

      <UserContext.Provider value={"사용자"}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
  );
}

export default ContextTest;