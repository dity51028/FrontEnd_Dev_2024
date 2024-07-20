import React, { useState } from 'react'
import Background from './components/background/Background'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"your dreams"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"Great",text2:"exprience"},
  ]
  const [heroCount,setHeroCount] = useState(1);
  const [playStatus,setPlayStatus] = useState(false);

  return (
  <>
  <Background playStatus={playStatus} heroCount={heroCount}/>
  <Navbar/>
  <Hero 
     heroData={heroData[heroCount]}
     heroCount = {heroCount}
     setHeroCount ={setHeroCount}
     playStatus={playStatus}
     setPlayStatus={setPlayStatus}

  />
  </>
  
  )
}

export default App