import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './GOODLOGO.png'

export default function Navbar() {
  return (
    <nav className="nav">

      <a href="../" className="site-title">
        <img className="logo" src={logo} alt={"LOGO"}/>
      </a>
      <ul>

        <a href="../">Home</a>
        <CustomLink to="/our-algorithm">Our Algorithm</CustomLink>
        <CustomLink to="/about">About</CustomLink>
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