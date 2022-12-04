import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './GOODLOGO.png'
import searchDistrict from "./searchDistrict"

export default function Navbar() {
  return (
    <nav className="nav">

      <a href="https://have-i-been-gerrymandered.github.io/react/" className="site-title">
        <img className="logo" src={logo} alt={"LOGO"}/>
      </a>
      <ul>
        <a id="home-link" href="https://have-i-been-gerrymandered.github.io/react/" class="nav-item">Home</a>
        <CustomLink to="/our-algorithm" class="nav-item">Our Algorithm</CustomLink>
        <CustomLink to="/about" class="nav-item">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}