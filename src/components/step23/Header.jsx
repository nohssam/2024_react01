// const Header = ({isDark}) => {
//   return (
//       <header 
//         className="header"
//         style={{
//           backgroundColor: isDark? 'black' : 'lightgray',
//           color : isDark?'white' : 'black'
//         }}
//       >

//         <h1>Welcome 홍길동</h1>
//       </header>
//   );
// };

// export default Header;

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const {isDark} = useContext(ThemeContext)
  const user = useContext(UserContext)
  return (
      <header 
        className="header"
        style={{
          backgroundColor: isDark? 'black' : 'lightgray',
          color : isDark?'white' : 'black'
        }}
      >

        <h1>Welcome {user}</h1>
      </header>
  );
};

export default Header;