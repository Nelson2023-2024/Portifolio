import '../Pages/Home/home.css'

//social links icons
import { MdWhatsapp } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
//icons
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";



function Hero() {
  return (
    <>
    
    <section className='hero'>
      <div className="container">
          <h5> <span>&hearts;</span>Welcome to my portfolio</h5>
          <h1>Hello, Im Nelson</h1>
          <h3>Frontend Developer</h3>
          <p>Hello I'm Nelson Ouya 19 years old passionate frontend developer based in Nairobi, Kenya.</p>
        <div className="hero__buttons">
          <button>Contact me</button>
          <button>Download CV</button>
        </div>
        <div className="hero__social-links">
          <MdWhatsapp />
          <FaLinkedin />
          <FaXTwitter />
          <FaGithub />

        </div>
        <div className="tech__stack">

          <p>Techstack |</p>
          <FaHtml5 />
          <DiCss3 />
          <IoLogoJavascript />
          <FaBootstrap />
          <SiTailwindcss />
          <FaReact />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero