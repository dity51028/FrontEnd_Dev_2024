import React from 'react'
import './Background.css'
import image1 from '../../assets/image-bg1.jpg'
import image2 from '../../assets/image-bg2.png'
import video1 from '../../assets/video-bg.mp4'


const Background = ({playStatus,heroCount}) => {
  
    if(playStatus){
        return(
            <video className='background' src={video1} autoPlay loop muted></video>
        )
    }
    
    if(heroCount===0){
        return <img src={image1} className='background' alt='image1'/>
    }
    if(heroCount===1){
        return <img src={image2} className='background' alt='image1'/>
    }
    if(heroCount===2){
        return <img src={image1} className='background' alt='image1'/>
    }
  
}

export default Background