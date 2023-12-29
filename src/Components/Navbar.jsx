import { Link, NavLink } from 'react-router-dom'

import '../Pages/Home/home.css'
import Button from './Button'
import { MdOutlineFileDownload } from "react-icons/md";

function Navbar() {

    const iconStyles = {
        fontSize: '22px',
    }
    const buttonStyles = {
    background: 'blue',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    display:'flex' ,
    alignItems: 'center',
    gap: '4px',
  };
  return (
    <>
    <nav>
        <div className="brand">
            <Link to='/' > My Portifolio</Link>
        </div>
        <div className="links">
            
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact me</NavLink>
        </div>
        <div className="cv">
            <Button text="Download CV" btnStyles={buttonStyles} icon={<MdOutlineFileDownload />} iconStyles={iconStyles}/>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar