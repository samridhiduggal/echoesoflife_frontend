import React from "react"
import { AWrapper } from "../../dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid3'>
          {AWrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper