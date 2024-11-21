import { createContext } from "react";

export const ThemeContext = createContext(null);

// export const ThemeContext = createContext('hello');
// 초기값을 주고 ContextTest.jsx 에서   
// <ThemeContext.Provider value={{isDark, setIsDark}}> 를 삭제후 
// page 컨포넌트에서 const data = useContext(ThemeContext);
//   console.log(data) 하면  hello  가 나온다.

