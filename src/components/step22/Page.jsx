import React, { useContext } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ThemeContext } from '../../context/ThemeContext';

// isDark 을 사용하지 않지만 아래 컴포넌트에게 건네 줘야 한다.
// const Page = ({isDark, setIsDark}) =>{
//     return(
//       <div className='page'>
//         <Header isDark={isDark} />
//         <Content isDark={isDark} />
//         <Footer isDark={isDark} setIsDark={setIsDark} />
//       </div>
//     );
//   };

// const Page = () =>{
//   const data = useContext(ThemeContext);
//   console.log(data)
//   return(
//     <div className='page'>
//       <Header isDark={data.isDark} />
//       <Content isDark={data.isDark} />
//       <Footer isDark={data.isDark} setIsDark={data.setIsDark} />
//     </div>
//   );
// };

const Page = () =>{
  return(
    <div className='page'>
      <Header  />
      <Content  />
      <Footer  />
    </div>
  );
};


export default Page;