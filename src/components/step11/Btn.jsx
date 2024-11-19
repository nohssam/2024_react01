import { Button } from "@mui/material";


// const Btn = ({ name }) => (
//   <Button variant="contained"
//     onClick={() => console.log(name)} >{name}</Button>

// )


// which는 이벤트 핸들러에서 이벤트의 유형이나 성격을 나타내는 역할을 합니다.
// 이 코드에서 which는 handleEvent 함수에 전달되는 두 번째 매개변수로, 
// 특정 이벤트가 발생했을 때 어떤 이벤트가 발생했는지를 나타내는 문자열 값을 전달합니다.
// const handleEvent = (name, which) => {
//   console.log(name, which)
// }

// const Btn = ({ name }) => (
//   <Button variant="contained"
//     onMouseEnter={() => handleEvent(name, 'onMouseEnter')}
//     onMouseLeave={() => handleEvent(name, 'onMouseLeave')}
//     onDoubleClick={() => handleEvent(name, 'onDoubleClick')}
//     onContextMenu={() => handleEvent(name, 'onContextMenu')}
//   >{name}</Button>
// )


// 여기서 e 는 이벤트 객체를 말한다.
const handleEvent = (name, e) => {
  console.log(name, e)
}
const Btn = ({ name }) => (
  <Button variant="contained"
    onClick={(e) => handleEvent(name, e)}
  >{name}</Button>
)

export default Btn;