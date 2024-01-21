import React from "react"
import Back from "../common/back/Back"
import RepositoryCard from "./RepositoryCard"

const RepositoryHome = () => {
  return (
    <>
      <Back title='Explore Repositories of your Choice' />
      <RepositoryCard />
    </>
  )
}

export default RepositoryHome