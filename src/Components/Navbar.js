import React from 'react'
import './Navbar.css'
import logo1 from '../Images/logo.svg'
import logo2 from '../Images/Text.svg'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo1} alt='img' className='logo1' />
                    <img src={logo2} alt='img' className='secondImg' />
                </div>
                <ul className="nav-links">

                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>


                    <div className="menu">

                        <li className="services">
                            <a href="/">Services <i className="nav-item-dropdown-caret"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg> </i> </a>

                            <ul className="dropdown">
                                <li><a href="/">Dropdown 1 </a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 3</a></li>
                                <li><a href="/">Dropdown 4</a></li>
                            </ul>

                        </li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>

                        <li className="common-navbar-searchbar nav-item"><div className="searchDiv"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16 searchbar-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></div></li>

                        <div className="outer">
                            <div className="button">
                                <span>Let's Talk</span>
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
