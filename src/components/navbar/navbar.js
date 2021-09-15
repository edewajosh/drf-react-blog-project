import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiICons from 'react-icons/ai';
import { SidebarData } from '../SideMenuData';
import './navbar.css';

const NavBar = () => {

    const [sideBar, setSideBar ] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar }/>
                </Link>
            </div>
            <nav className={sideBar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiICons.AiOutlineClose/>
                        </Link>
                    </li>
                    { SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;