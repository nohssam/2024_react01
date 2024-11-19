import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import App from './App';
import Header from './components/step01/Header';
import Main from './components/step01/Main';
import Footer from './components/step01/Footer';
import CardList from './components/step02/CardList';
import CardList2 from './components/step03/CardList2';
import Library from './components/step04/Library';
import Profile from './components/step05/Profile';
import Test from './components/step00/Test';
import CommentList from './components/step06/CommentList';
import PackingList from './components/step07/PackingList';
import TextList from './components/step08/TextList';
import TextList2 from './components/step08/TextList2';
import TextList3 from './components/step08/TextList3';
import Event01 from './components/step09/Event01';
import Event02 from './components/step09/Event02';
import CardList3 from './components/step10/CardList3';

import reportWebVitals from './reportWebVitals';
import NumberCounter from './components/step10/NumberCounter';
import NumberCounter02 from './components/step11/NumberCounter02';
import NumberCounter03 from './components/step11/NumberCounter03';
import TestInput from './components/step12/TestInput';
import CountEx from './components/step13/CountEx';
import Pinn from './components/step13/Pinn';
import TodoList from './components/step14/TodoList';
import ProFileEx from './components/step15/ProFileEx';
import UniSelectorEx from './components/step16/UniSelectorEx';
import FormEx from './components/step17/FormEx';


const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
  {
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    image: './img/tree-1.jpg',
    isFavorite: true
  },
  {
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    image: './img/tree-2.jpg',
    isFavorite: false
  },
  {
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    image: './img/tree-3.jpg',
    isFavorite: true
  }
]
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* step01 */}
    {/* <Test /> */}

    {/* step01    
    <Header />
    <Main />
    <Footer /> */}

    {/* step02 */}
    {/* <CardList /> */}

    {/* step03 */}
    {/* <CardList2 /> */}

    {/* step04 */}
    {/* <Library /> */}

    {/* step05 */}
    {/* <Profile /> */}

    {/* step06 */}
    {/* <CommentList /> */}

    {/* step07 */}
    {/* <PackingList /> */}

    {/* step08 */}
    {/* <TextList /> */}
    {/* <TextList2 /> */}
    {/* <TextList3 /> */}

    {/* step09 */}
    {/* <Event01 /> */}
    {/* <Event02 /> */}

    {/* step10 */}
    {/* <CardList3 items={items} /> */}
    {/* <NumberCounter /> */}

    {/* step11 */}
    {/* <NumberCounter02 /> */}
    {/* <NumberCounter03 /> */}

    {/* step12 */}
    {/* <TestInput /> */}

    {/* step13 */}
    {/* <CountEx /> */}
    {/* <Pinn /> */}

    {/* step14 */}
    {/* <TodoList/>  */}

    {/* step15 */}
    {/* <ProFileEx /> */}

    {/* step16 */}
    {/* <UniSelectorEx /> */}

     <FormEx /> 

  </React.StrictMode>
);
reportWebVitals();
