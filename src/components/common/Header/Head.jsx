import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSB">
                <div className="logo">
                   <h1>ECHOES OF LIFE</h1> 
                   <span>A MUSEUM OF MEMORIES</span>
                </div>

                <div className='social'>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-pinterest icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head