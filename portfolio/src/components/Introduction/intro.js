import React from 'react'
import './Intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll'; 
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span> <br />
        <span className="IntroText">I'm <span className="introName">Anil</span><br />Web Developer</span>
        <p className="introPara">I am skilled web designer with experience in creating visually appealing and user freindly websites</p>
        <Link><button className="btn"><img src= {btnImg} alt="Hire Me"  className='btnImg'/>Hire Me</button></Link>
        

      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
