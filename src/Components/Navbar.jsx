import { Link, NavLink } from 'react-router-dom'

import '../Pages/Home/home.css'


function Navbar() {


  const navLists =[
    {
        id:1,
        title:"Home",
        path: "/"
    },
    {
        id:2,
        title:"About me",
        path: "/about"
    },
    {
        id:4,
        title:"Testimonials",
        path: "/testimonials"
    },
    {
        id:5,
        title:"Projects",
        path: "/projects"
    },
    {
        id:6,
        title:"Contact me",
        path: "/contact"
    }
  ]
  return (
    <>
    <nav>
        <div className="container">
        <div className="brand">
            <Link to='/' > Nelson</Link>
        </div>
        <div className="links">
           {
            navLists.map(({id, title, path})=>(
                <NavLink key={id} to={path}> {title}</NavLink>
            ))
           }
        </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar