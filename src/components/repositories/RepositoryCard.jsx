import React from "react"
import "./repository.css"
import { repositoryCard } from "../../dummydata"

const RepositoryCard = () => {
  return (
    <>
      <section className='RepositoryCard'>
        <div className='container grid2'>
          {repositoryCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                </div>
                <div className='text'>
          
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <h1>{val.coursesName}</h1>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <p>
                  {val.priceAll}
                </p>
              </div>
              <button className='outline-btn'>VISIT & READ !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default RepositoryCard
