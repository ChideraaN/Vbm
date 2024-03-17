import { NavLink } from "react-router-dom";
import { useState } from "react";
import './NavBar.css'

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar' style={click ? {backgroundColor: '#111111'} : {backgroundColor: ''}}>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <NavLink className={({ isActive }) => (isActive ? "links active" : 'links')} onClick={closeMobileMenu} to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/stock'
                className='links'
                onClick={closeMobileMenu}
              >
                Stock
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className='links'
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/HQ'
                className='links'
                onClick={closeMobileMenu}
              >
                HQ
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}