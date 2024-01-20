import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';   
import menu from '../../assets/menu.png';



const Navbar = () => {
  const[showMenu, setshowMenu]= useState(false);

  return (
    <div>
      <nav className="navbar">
            <img src= {logo} alt=" logo" className='logo' />
            <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration ={500}className="desktopmenuListItem">Home</Link>

                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration ={500} className="desktopmenuListItem">About</Link>

                <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration ={500}className="desktopmenuListItem">Portfolio</Link>

                <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration ={500}className="desktopmenuListItem">Clients </Link>
            </div>
                <button className="desktopmenuBtn" onClick={()=>{
                  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
                }}>
                    <img src= {contactImg} alt="" className="desktopMenuImg" />Contact Me</button>


                    <img src= {menu} alt=" Menu" className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>

                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration ={500}className="ListItem" onClick={()=>setshowMenu(false)}>Home</Link>

                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration ={500} className="ListItem" onClick={()=>setshowMenu(false)}>About</Link>

                <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration ={500}className="ListItem" onClick={()=>setshowMenu(false)}>Portfolio</Link>

                <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration ={500}className="ListItem" onClick={()=>setshowMenu(false)}>Clients </Link>

                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration ={500}className="ListItem" onClick={()=>setshowMenu(false)}>Contact </Link>
            </div>         
      </nav>
    </div>
  )
}

export default Navbar
