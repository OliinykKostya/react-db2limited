import React from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav header__nav">
        <ul className="nav justify-content-center">

          <li className="nav-item">
            <NavLink
              to="/films"
              activeClassName="nav__link--active"
              className="nav-link"
            >
              Films
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/characters"
              activeClassName="nav__link--active"
              className="nav-link"
            >
              Characters
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/planets"
              activeClassName="nav__link--active"
              className="nav-link"
            >
              Planets
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/species"
              activeClassName="nav__link--active"
              className="nav-link"
            >
              Species
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/starships"
              activeClassName="nav__link--active"
              className="nav-link"
            >
              Starships
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/vehicles"
              activeClassName="nav__link--active"
              className="nav-link"
            >
              Vehicles
            </NavLink>
          </li>

        </ul>
      </nav>
  </header>

  )
}

export default Header;