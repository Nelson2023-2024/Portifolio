//icons
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

function ContactForm() {
  return (
    <>
    <section className="contact__section">
        <div className="container">
        {/* social icons */}
        <div className="social__links">
           
           <h4>Lets talk about every thing!</h4>
           <h6>Dont like forms? Send me an email </h6>
            <div className="card__link">
                <a href="mailto:nelsonobuya19@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /> <span>Email</span></a>
                
            </div>

            <div className="card__link">
                <a href="tel:+254115720771" target="_blank" rel="noopener noreferrer"><FaPhone /> <span>Phone</span></a>
                 

            </div>

             <div className="card__link">
                <a href="https://wa.me/254115720771" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /> 
                <span>Whatsapp</span></a>
                
                 
            </div>

             <div className="card__link">
                <a href="https://www.linkedin.com/in/nelson-obuya-841251273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin />
                 <span>LinkedIn</span></a>
                 
                 
            </div>
          
        </div>

        {/* contact-form */}
        <form className="contact__form">
            <h1>Get In Touch</h1>
            <div className="form-control-1">
                <input type="text" placeholder="Firstname" />
                <input type="text" placeholder="Lastname" />
            </div>

            <div className="form-control-2">
                <input type="text" placeholder="Email" />
            </div>

            <div className="form-control">
               <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </div>

            <button className="btn">Send</button>

        </form>
        </div>
    </section>
    </>
  )
}

export default ContactForm