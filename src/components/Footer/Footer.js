import './Footer.scss';
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer">
      <ul className="nav-bar-bottom">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Stock">Stock</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/HQ">HQ</NavLink>
        </li>
      </ul>
      <div className="copyright">© 2024 VBM</div>
    </div>
  )
}