import { NavLink } from "react-router-dom"

import { logo } from "../assets/images"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/portfolio/">
        <img
          src={logo}
          alt="logo"
          className="w-18 h-18 object-contain border-4 border-sky-500"
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/portfolio/about"
          className={({ isActive }) =>
            (isActive ? "text-blue-600" : "text-[#5df542]") + " font-extrabold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio/projects"
          className={({ isActive }) =>
            (isActive ? "text-blue-600" : "text-[#5df542]") + " font-extrabold"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
