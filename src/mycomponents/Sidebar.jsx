import { useState } from 'react';
import React from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaThList, FaUserAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);


    const menuItems=[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaTh/>
        },
        {
            path:'/about',
            name:'About',
            icon:<FaUserAlt/>
        },
        {
            path:'/comment',
            name:'Comment',
            icon:<FaCommentAlt/>
        },
        {
            path:'/product',
            name:'Product',
            icon:<FaShoppingBag/>
        },
        {
            path:'/productlist',
            name:'Productlist',
            icon:<FaThList/>
        },
        {
            path:'/analytics',
            name:'Analytics',
            icon:<FaRegChartBar/>
        },
    ]
    return (
        <div className='container'>
           <div style={{width:isOpen?'300px':'80px'}} className="sidebar">
            <div className="top_section">
                <h1 style={{display:isOpen?'block':'none'}} className="logo">Logo</h1>
                <div style={{marginLeft:isOpen?'80px':'9px'}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item,index)=>(
                    <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                        <div className="icons">{item.icon}</div>
                        <div style={{display:isOpen?'block':'none'}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;