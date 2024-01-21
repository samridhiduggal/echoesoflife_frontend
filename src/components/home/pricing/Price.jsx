import React from "react"
import { price, highlights } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Price = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle="Prices" title="Prices & Packages"/>

          <div className='content grid4'>
            {price.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <h1>{val.price}</h1>
                  </div>
                </div>
                <h4>{val.desc}</h4>
                <p>{val.desc1}</p>
                <p>{val.desc2}</p>
                <p>{val.desc3}</p>
                <p>{val.desc4}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Price