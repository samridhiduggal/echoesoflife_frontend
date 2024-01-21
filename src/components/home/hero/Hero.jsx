import React from 'react'
import Heading from "../../common/heading/Heading"
import "./Hero.css"
const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='container'>
            <div className='row' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Heading title='ECHOES OF LIFE - A Museum of Memories' />
                <p>Connect with us effortlessly – your gateway to seamless communication and personalized assistance.</p>
                <div classname='button'>
                    <a href="/repositories"><button className='primary-btn'>
                        GET STARTED <i className='fa a-long-arrow-alt-right'></i>
                    </button></a>
                </div>
            </div>
        </div>
    </section>
    <div className='margin'></div>
    </>
  )
}

export default Hero