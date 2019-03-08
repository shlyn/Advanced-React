import Nav from "./Nav"

function Header(props) {
  return (
    <div>
      <div className="bar">
        <a href="">Digital Donuts</a>
        <Nav />
      </div>
      <p>Search</p>
    </div>
  )
}

export default Header
