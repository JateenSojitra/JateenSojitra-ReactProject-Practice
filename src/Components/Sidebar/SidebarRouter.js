import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'


const SidebarRouter = ({children}) => {
  const [isopen ,setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isopen)
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <i class="material-symbols-outlined">home</i>
    },
    {
      path: "/about",
      name: "About",
      icon: <i className="material-symbols-outlined"> contact_support </i>
    },
    {
      path: "/calculator",
      name: "Calculator",
      icon: <i class="material-symbols-outlined">calculate</i>
    },
    {
      path: "/stopWatch",
      name: "Stop Watch",
      icon: <i className="material-symbols-outlined">timer</i>
    },
    {
      path: "/wether",
      name: "Wether",
      icon: <i class="material-symbols-outlined">cloudy</i>
    },
  ]
  return (
    <>
      <div className='container m-0 p-0'>
        <div style={{width : isopen ? "250px" : "50px"}} className='sidebar'>
          <div  className='top_section'>
            <h1 style={{display : isopen ? "block" : "none"}} className='logo'>Logo</h1>
            <div style={{marginLeft : isopen ? "30px" : "0px"}} className='bars'>
             {/* <DehazeIcon  /> */}
             <i className="material-symbols-outlined cursor-pointer" onClick={toggle}>menu_open</i>
            </div>
          </div>
        {
          menuItem.map((item , index)=>{
          return(
            <NavLink to={item.path} key={index} className='link' activeclassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display : isopen ? "block" : "none"}} className='link-text'>{item.name}</div>
            </NavLink>
            )
          })
        }
        </div>
        <main>{children}</main>
      </div>
    </>

  )
}

export default SidebarRouter
