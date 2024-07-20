//hooks
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom'

import '../Pages/Home/home.css'

//icons
import { FaBars, FaTimes } from 'react-icons/fa';

//file imports
import DarkMode from './DarkMode/DarkMode';


function Navbar() {


  const navLists =[
    {
        id:1,
        title:"Home",
        path: "/",
        idjs:"#hero"


    },
    {
        id:2,
        title:"About me",
        path: "/about",
        idjs:"#about"

    },
    {
        id:4,
        title:"Testimonials",
        path: "/testimonials",
        idjs:"#testimonials"

    },
    {
        id:5,
        title:"Projects",
        path: "/projects"
    },
    {
        id:6,
        title:"Contact me",
        path: "/contact",
    }
  ]
    const handleClick = (idjs) => {
    const element = document.querySelector(idjs);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  //useState
  const [showLinks, setShowLinks] = useState(false)

  
  const toggleLinks = () => {
    setShowLinks(prevshow => !prevshow)
  }
  
  return (
    <>
    <nav>
        <div className="container">
          
        <div className="brand">
            <Link to='/' > Nelson</Link>
        </div>
        {/* buggermenu for responsive design */}
        <button className="burger-menu" onClick={toggleLinks}>
          {
            showLinks ? <FaTimes/>:<FaBars/>
          }
        </button>
        

        <div className={`links ${showLinks ? 'show' : ''}`}>
           {
            navLists.map(({id, title, path, idjs})=>(
                <NavLink href={idjs} key={id} to={path} onClick={() => {
                  handleClick(idjs);
                  setShowLinks(false)
                
                }}> {title}</NavLink>
            ))
           }
        </div>
        <DarkMode/>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar