// import React, {useState} from 'react'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { NavLink } from "react-router-dom";
// import { SidebarData } from './SidebarData'
// import '../App.css'
// import {IconContext } from 'react-icons'


// function Navbar({currentUser}) {
//     const [sidebar, setSidebar] = useState(false)

//     const showSidebar = () => setSidebar(!sidebar)
//     return (
//         <>
//             <IconContext.Provider value={{color: '#fff'}}>
//                 <div className="navbar">
//                 <h1  style={{color: "black"}}>{currentUser.username}</h1>
//                     <NavLink to="/" className="menu-bars">
//                     <FaIcons.FaBars onClick={showSidebar}/>
//                     </NavLink>

//                     <NavLink className="menu-items"
//                         exact
//                         activeClassName="active"
//                         to="/sign_up">Sign up
//                     </NavLink>
                    
//                 </div>
//     {/* if sidebar is showing , make the className active, if not make it hidden */}
//                 <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                     <ul className="nav-menu-items" onClick={showSidebar}>
//                         <li className="navbar-toggle">
//                             <NavLink to="/" className="menu-bars">
//                                 <AiIcons.AiOutlineClose />
//                             </NavLink>
//                         </li>
//                         {SidebarData.map((item, index) => { 
//                             return (
//                                 <li key={index} className={item.cName}>
//                                     <NavLink to={item.path}>
//                                         {item.icon} 
//                                         <span>{item.title}</span>
//                                     </NavLink>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </nav>
//             </IconContext.Provider>
//         </>
//     )
// }

// export default Navbar