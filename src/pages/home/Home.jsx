//import React from 'react';
import Profile from "../../assets/DSC_0193.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Professional Coder"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className="home section grid">
      <motion.div
        className="progressBar"
        style={{ scaleX: scrollYProgress }}
      />
      <Fade className='zIndex'>
        <img src= {Profile} alt="" className='home__img' />
      </Fade>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I m Kamaleesh</span><br />
            <p className='type'>{text}
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor='var(--first-color)'
              />
            </p>
          </h1>
          <p className="home__description">
          I am a highly motivated and adaptable professional seeking to transition into a new career in the software profession. I
am eager to leverage my transferable skills and passion for the IT industry to make a positive impact in a new role. I am
confident in my ability to excel in a new environment and contribute to the success of my team and organisation. I am
committed to continuous learning and development and excited to embrace new challenges and opportunities in my
career.

          </p>
          <Link to="/about" className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home