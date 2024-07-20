import React from 'react'
import './Hero.css'
import playBtn from '../../assets/playBtn.png'
import pauseBtn from '../../assets/pauseBtn2.png'

const Hero = ({heroData,heroCount,setHeroCount,playStatus,setPlayStatus}) => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>

        <div className="explore">
            <p>Explore the features</p>
            <img src="" alt="" />
        </div>

        <div className="hero-dot-play">
            <ul className='hero-dots'>
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?'hero-dot orange':'hero-dot'}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?'hero-dot orange':'hero-dot'}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?'hero-dot orange':'hero-dot'}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pauseBtn:playBtn} alt="btn" />
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero