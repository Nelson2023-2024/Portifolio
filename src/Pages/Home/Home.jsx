import About from "../../Components/About"
import Footer from "../../Components/Footer"
import Hero from "../../Components/Hero"
import Testimonials from "../../Components/Testimonials"

function Home() {
  return (
    <>
        <Hero id='hero'/>
        <About id='about'/>
        <Testimonials  id='testimonials'/>
        <Footer/>

    </>
  )
}

export default Home