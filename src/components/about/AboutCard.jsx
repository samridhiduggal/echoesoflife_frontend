import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import { homeMission } from "../../dummydata"
import AWrapper from "./AWrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
            <div className='items'>
              {homeMission.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
          <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/pexels-george-milton-7015075 (1).jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading title='ABOUT US' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  )
}

export default AboutCard
