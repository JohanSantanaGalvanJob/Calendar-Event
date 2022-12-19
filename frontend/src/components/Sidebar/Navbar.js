import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import * as BootstrapIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons'
import * as IoIcons5 from 'react-icons/io5'
import './Navbar.css'
import UserService from "../../Services/UserService"
import swal from 'sweetalert2';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('userData'))

    const navigate = useNavigate();

    const mySwalError = (error) => {

        swal.fire({
            title: 'Oops Something went wrong!',
            icon: 'error',
            text: error,
          })

      }

    // const hasImg = !!user.image;
    const [sidebar, setSideBar] = useState(false)
    // const isGuest = !user;
    const isAdmin = !!user?.role.includes('admin');
    const isUser = !!user;

    let img = '';
    let fullName = '';
    if (isUser) {
        img = user.image
        fullName = user.first_name + ' ' + user.last_name;
    }

    const logOut = (event) => {
        const swalWithBootstrapButtons = swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

        swal.fire({
            title: 'Delete Location',
            text: 'Are you sure you want to Log Out?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, cancel!',
            confirmButtonText: 'Yes',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                UserService.signOut(id).then((response) => {
                    console.log(response);
                    localStorage.removeItem('userData')
                    navigate('/')
                }).catch(e => {
                    mySwalError(e);
                     console.log(e);
                 });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'You have not logged out',
                  'error'
                )
              }
        })
        const id = localStorage.getItem("user")
        event.preventDefault();

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
                    <img src='/icons/MenuArriba/logo.png' ></img>
                    <Link to='/Settings'>
                        <img src='/icons/MenuArriba/ajustes.png'></img>
                    </Link>

                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-menu-items' onClick={showSidebar}>

                        <div className='sidebar-button'>

                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>

                            <li className='navbar-toggle'>
                                {isUser ? (
                                    <div className='sidebar-user-information'>
                                        <img className='sidebar-image' src={img} onClick={showSidebar} />
                                        <p className='sidebar-name'>{fullName}</p>
                                        <div className="navbar-line"></div>
                                    </div>
                                ) : <img src='./icons/MenuArriba/usuario.png' onClick={showSidebar} />
                                }
                            </li>

                        </div>





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
                                        <IoIcons5.IoLogOutOutline></IoIcons5.IoLogOutOutline>
                                        <span>Log Out</span>
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