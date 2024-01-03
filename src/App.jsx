//hools
import { useEffect } from 'react'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Layout from './Components/Layout/Layout'


//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
    useEffect(()=> {
        AOS.init({
            offset:200,
            duration:800,
            easing:"ease-in-sine",
            delay:100,
        });
    }, [])

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Hero/>}></Route>
                    <Route path='/about' element={<About/>} />
                    <Route path="/services" element={<Skills />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Route>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </Router>

    )
}

export default App