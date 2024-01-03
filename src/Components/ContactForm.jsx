// EMAIL
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

//icons
import { IoLogoWhatsapp } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

// Define the ContactForm component
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xa2qx1u', 'template_rd3sbmd', form.current, 'A_g4DlZrULCD5YIg4')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
           alert('Message failed to send. Please try again.');
        }
      );
  };

  return (
    <>
      <section className="contact__section">
        <div className="container">
          {/* Social icons */}
          <div className="social__links">
            <h4>Lets talk about everything!</h4>
            <h6>Dont like forms? Send me an email </h6>
            <div className="card__link">
              <a href="mailto:nelsonobuya19@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail /> <span>Email</span>
              </a>
            </div>
            <div className="card__link">
              <a href="tel:+254115720771" target="_blank" rel="noopener noreferrer">
                <FaPhone /> <span>Phone</span>
              </a>
            </div>
            <div className="card__link">
              <a href="https://wa.me/254115720771" target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp /> <span>Whatsapp</span>
              </a>
            </div>
            <div className="card__link">
              <a
                href="https://www.linkedin.com/in/nelson-obuya-841251273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          {/* Contact form */}
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <h1>Get In Touch</h1>
            <div className="form-control-1">
              <input type="text" placeholder="Firstname" name='user_name' minLength={2} required />
              <input type="text" placeholder="Lastname" name='user_name' minLength={2} required />
            </div>
            <div className="form-control-2">
              <input
                type="email"
                name='user_email'
                placeholder="Email"
                required
              />
            </div>
            <div className="form-control">
              <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required minLength={50}></textarea>
            </div>
            <button className="btn">Send</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
