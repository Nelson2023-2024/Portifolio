import '../Pages/Home/home.css'

//download
import { MdDownload } from "react-icons/md";
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
import { MdEmail } from 'react-icons/md';


import { Link } from 'react-router-dom';

//pdf
const PDF_FILE_URL = "/Nelson_Ouya_CV.pdf"

function Hero() {

  const downloadFileAtURL =(url) =>{
    const fileName = url.split("/").pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()

  }
  return (
    <>
    
    <section className='hero' id='hero'>
      <div className="container">
          <h5 data-aos="fade-down"> <span>&hearts;</span>Welcome to my portfolio</h5>
          <h1 data-aos="fade-down">Hello, Im Nelson</h1>
          <h3 data-aos="fade-down">Frontend Developer</h3>
          <p data-aos="fade-down">Hello I'm Nelson Ouya 19 years old passionate frontend developer based in Nairobi, Kenya.</p>
        <div className="hero__buttons">
          <a onClick={() =>{downloadFileAtURL(PDF_FILE_URL)} } data-aos-duration="300" data-aos="fade-right">Download CV <span><MdDownload /></span></a>
         <Link to={'/contact'} data-aos-duration="300" data-aos="fade-left">Contact me</Link>
          
        </div>
        <div className="hero__social-links" data-aos="fade-left">
         <a href="https://wa.me/254115720771" target="_blank" rel="noopener noreferrer"><MdWhatsapp /></a>
          <a href="https://www.linkedin.com/in/nelson-obuya-841251273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:nelsonobuya19@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail /> 
              </a>
          <a href="https://github.com/Nelson2023-2024" rel="noopener noreferrer"><FaGithub /></a>
          
          
          
          

        </div>
        <div className="tech__stack"  >

          <h2>Techstack |</h2>
          <FaHtml5 />
          <DiCss3 />
          <IoLogoJavascript />
          <FaBootstrap />
          <SiTailwindcss />
          <FaReact />
          <FaGithub/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero