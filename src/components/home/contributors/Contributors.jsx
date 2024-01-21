import React from "react"
import { contributors, highlights } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Contributors = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle="contributors" title="Our Top Contributors"/>

          <div className='content grid3'>
            {contributors.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contributors