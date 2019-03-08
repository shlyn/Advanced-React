import Header from "./Header"
import Meta from "./Meta"
import styled from "styled-components"
//For Theming
function Page(props) {
  return (
    <div>
      <Meta />
      <Header />
      <MyButton>Click Me BABAY</MyButton>
      {props.children}
    </div>
  )
}

export default Page

const MyButton = styled.button`
  background: red;
  font-size: 100px;
`
