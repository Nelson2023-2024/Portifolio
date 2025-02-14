import Laptop from "../assets/laptop.jpg";

function About() {
  return (
    <>
      <section className="about__section" id="about">
        <div className="container">
          {/* image */}
          <div className="about__img" data-aos="flip-left">
            <img src={Laptop} alt="" />
          </div>
          {/* text-content */}
          <div className="about__data" data-aos="fade-down">
            <h2>ABOUT ME</h2>
            <h3>A dedicated Front-end Developer based in Nairobi, Kenya</h3>
            <p>
              As a junior Fullstack Developer I posses an impressive arsenal of
              skills in
              <strong>
                HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Github, PHP,
                Redux, MongoDB, Express JS, React, Node JS
              </strong>
              . I excel in designing and maintaining responsive websites that
              offer smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean, well
              documented and utilize cutting edge development tools and
              techinques . I am also a team player who thrives in collaborating
              with cross-functional teams to produce outstanding web
              applications
            </p>

            <div className="education">
              <h3>Education Level</h3>
              <ul>
                <li>
                  <p>
                    <strong>Univeristy :</strong> St Pauls University Limuru
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Course :</strong> Bachelors in Computer Science
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Year : </strong>3.2( Junior )
                  </p>
                </li>
              </ul>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <ul>
              <li>
                  <a
                    href="https://www.freecodecamp.org/certification/Nelson254/back-end-development-and-apis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend Development and API's
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/Nelson254/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Freecodecamp Responsive Web Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="experience">
              <h3>Experience</h3>
              <ul>
                <li>
                  <p>3 Months +</p>
                </li>
                <li>
                  <p>Freelance work</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
