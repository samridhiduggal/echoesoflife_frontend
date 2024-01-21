import React from "react"
import { featured } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Featured = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle="memories" title="Featured Memories"/>

          <div className='content grids'>
            {featured.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  
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

export default Featured