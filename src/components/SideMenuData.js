import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [{
        title: 'Home',
        path: '/home',
        icon: < AiIcons.AiFillHome / > ,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: < IoIcons.IoIosPaper / > ,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: < FaIcons.FaCartPlus / > ,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: < FaIcons.FaInfoCircle / > ,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/',
        icon: < FaIcons.FaInfoCircle / > ,
        cName: 'nav-text'
    },
];