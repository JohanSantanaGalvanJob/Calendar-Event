import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BootstrapIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import './Navbar.css'

function Navbar() {
    const user = JSON.parse(localStorage.getItem('userData'))
    const [sidebar, setSideBar] = useState(false)
    console.log(user)

    const showSidebar = () => {
        setSideBar(!sidebar)
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'black' }}>
                <div className='navbar'>

                    <Link to='#' className='menu-bars'>
                        {user ? (
                            <img src='./icons/Ayuda/mundo.png' onClick={showSidebar} />
                        ) : <BootstrapIcons.BsPerson onClick={showSidebar} />
                        }

                    </Link>
                    <img src='./icons/MenuArriba/logo.png' ></img>
                    <Link to='/Settings'>
                        <img src='./icons/MenuArriba/ajustes.png'></img>
                    </Link>

                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <>
                                    <li key={index} className={item.className}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                    <div className="navbar-line"></div>
                                </>
                            )
                        })}

                    </ul>

                    <div className='navbar-bottom-part'>
                        <h2>© Event Calendar</h2>
                    </div>

                </nav>
            </IconContext.Provider>

        </>
    )
}

export default Navbar