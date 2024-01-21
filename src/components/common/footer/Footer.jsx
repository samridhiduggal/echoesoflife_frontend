import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ECHOES OF LIFE</h1>
            <span>A MUSEUM OF MEMORIES</span>
            <p> A digital sanctuary where personal narratives resound, weaving a tapestry of shared memories, triumphs, and the timeless echoes of the human experience.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <a href="/about"><li>About Us</li></a>
              <li>Services</li>
              <a href="/developer"><li>Developer</li></a>
              <a href="/blog"><li>Blog</li></a>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <a href="/repositories"><li>Repositories</li></a>
            <a href="/contact"><li>Contact Us</li></a>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Dehradun, Uttarakhand.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 1234567890
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                echoesoflife.museumofmemories@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This website is made with <i className='fa fa-heart'></i> by Samridhi Duggal
        </p>
      </div>
    </>
  )
}

export default Footer