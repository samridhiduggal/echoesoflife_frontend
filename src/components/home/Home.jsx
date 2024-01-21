import React from 'react'
import Hero from "./hero/Hero"
import Highlights from './highlights/Highlights'
import Contributors from './contributors/Contributors'
import Featured from './featured/Featured'
import Price from './pricing/Price'
import Faq from "./faq/Faq"
const Home = () => {
  return (
    <>
    <Hero />
    <Highlights />
    <Contributors />
    <Featured />
    <Price />
    <Faq />
    </>
  )
}

export default Home