import React, {useState} from 'react'
import Head from './Head'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="">LOGIN</Link></li>
                    <li><Link to="/repositories">REPOSITORIES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/developer">DEVELOPER</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                
                <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
            </nav>
        </header>
    </>
  )
}

export default Header