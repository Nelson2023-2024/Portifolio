import { Link, NavLink } from 'react-router-dom'

import '../Pages/Home/home.css'


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
  return (
    <>
    <nav>
        <div className="container">
        <div className="brand">
            <Link to='/' > Nelson</Link>
        </div>
        <div className="links">
           {
            navLists.map(({id, title, path, idjs})=>(
                <NavLink href={idjs} key={id} to={path} onClick={() => handleClick(idjs)}> {title}</NavLink>
            ))
           }
        </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar