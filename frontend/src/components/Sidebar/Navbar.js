import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BootstrapIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons'
import * as IoIcons5 from 'react-icons/io5'
import './Navbar.css'
import UserService from "../../Services/UserService"

function Navbar() {
    const user = JSON.parse(localStorage.getItem('userData'))

   
   
    // const hasImg = !!user.image;
    const [sidebar, setSideBar] = useState(false)
    // const isGuest = !user;
    const isAdmin = !!user?.role.includes('admin');
    const isUser = !!user;

    let img='';
    if (isUser){
        img = user.image
    }

    const logOut = (event) => {
        // saveUser()
        const id = localStorage.getItem("user")
        event.preventDefault();
    
        UserService.signOut(id).then((response) => {
          console.log(response);
            localStorage.removeItem('userData')
            window.location.reload()
        });
    
      }

    const showSidebar = () => {
        setSideBar(!sidebar)
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'black' }}>
                <div className='navbar'>

                    <Link to='#' className='menu-bars'>
                        {isUser ? (
                            <img className='navbar-image' src={img} onClick={showSidebar} />
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



                        {isUser ? (
                            <div className='nav-text'>
                                <li>
                                    <Link to='/EditProfile'>
                                        <BootstrapIcons.BsPerson></BootstrapIcons.BsPerson>
                                        <span>Edit Profile</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>

                                <li>
                                    <Link to='/DarkMode'>
                                        <AiIcons.AiOutlineEye></AiIcons.AiOutlineEye>
                                        <span>Dark Mode</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>

                                <li onClick={logOut}>
                                    <Link to='/'>
                                    <IoIcons5.IoLogOutOutline></IoIcons5.IoLogOutOutline>
                                    <span>Log Out</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>

                            </div>

                        ) : 
                        
                        <div className='nav-text'>
                                <li>
                                    <Link to='/Login'>
                                        <BootstrapIcons.BsPerson></BootstrapIcons.BsPerson>
                                        <span>Log In</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>

                                <li>
                                    <Link to='/DarkMode'>
                                        <AiIcons.AiOutlineEye></AiIcons.AiOutlineEye>
                                        <span>Dark Mode</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>

                                <li>
                                    <Link to='/SignUp'>
                                        <AiIcons.AiOutlineEye></AiIcons.AiOutlineEye>
                                        <span>Sign Up</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>

                                <li>
                                    <Link to='/'>
                                    <IoIcons5.IoLogOutOutline></IoIcons5.IoLogOutOutline>
                                        <span>Exit</span>
                                    </Link>
                                </li>

                                <div className="navbar-line"></div>
                               
                            </div>
                        
                        }


                      

                        {/* <Link to="" onClick={item.method}>
                                                {item.icon}
                                                <span>{item.title}</span>

                                            </Link> */}
                       



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