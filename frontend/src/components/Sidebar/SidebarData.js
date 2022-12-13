import React from 'react'
import * as BootstrapIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import Swal from 'sweetalert2'


export const SidebarData =[
    {
        title: 'Edit Profile',
        path: '/EditProfile',
        icon: <BootstrapIcons.BsPerson></BootstrapIcons.BsPerson>,
        className: 'nav-text'
    },
    {
        title: 'Dark Mode',
        path: '/DarkMode',
        icon: <AiIcons.AiOutlineEye></AiIcons.AiOutlineEye>,
        className: 'nav-text'
    },
    {
        title: 'Logout',
        path: `http://localhost:3000/users/sign_out`,
        icon: <IoIcons5.IoLogOutOutline></IoIcons5.IoLogOutOutline>,
        className: 'nav-text'
    },
]