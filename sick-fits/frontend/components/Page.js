import React from "react"

//For Theming
function Page(props) {
  return (
    <div>
      <p>Hey I am el pago componento</p>
      {props.children}
    </div>
  )
}

export default Page
