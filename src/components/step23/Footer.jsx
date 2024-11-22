// const Footer = ({isDark, setIsDark}) => {
//   const toggleTheme = () =>{
//     setIsDark(!isDark)
//   };
//   return(
//     <footer
//       className='footer'
//       style={{
//         backgroundColor : isDark?'black' :'lightgray'
//       }}
//     >
//       <button className='button' onClick={toggleTheme}>Dark Mode</button>

//     </footer>
//   );
// }
// export default Footer;

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext)
  const toggleTheme = () =>{
    setIsDark(!isDark)
  };
  return(
    <footer
      className='footer'
      style={{
        backgroundColor : isDark?'black' :'lightgray'
      }}
    >
      <button className='button' onClick={toggleTheme}>Dark Mode</button>

    </footer>
  );
}
export default Footer;