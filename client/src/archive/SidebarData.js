import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi'
import * as FaIcons from 'react-icons/fa';


export const SidebarData = [
    {
        title: 'Home',
        path: '/', 
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'View Profile',
        path: '/profile', 
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Booking Form',
        path: '/booking', 
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Booking History',
        path: '/history', 
        icon: <BiIcons.BiBookContent />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout', 
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }

    
]