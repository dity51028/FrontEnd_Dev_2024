import React from 'react';
import  { useState, useEffect } from 'react';
import '../App.css'


const ComingSoon = () => {
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(20);
  const [minutes, setMinutes] = useState(12);
  const [seconds, setSeconds] = useState(60);

  useEffect(()=>{
      const timeId = setInterval(()=>{
        setSeconds(prevSeconds => (prevSeconds === 0 ? 60 : prevSeconds-1));

        if(seconds === 0){
          setMinutes(prevMinutes =>(prevMinutes === 0?60 : prevMinutes-1));
        }
        if (minutes === 0){
          setHours(prevHours => (prevHours === 0?24 : prevHours-1));
        }
        if(hours === 0){
          setDays(prevDays => (prevDays === 0?0 : prevDays-1));
        }
        if(days === 0){
          clearInterval(timeId);
        }

      },1000);
      return () => clearInterval(timeId);

  },[]);

  return (
     <section className="container">
        <header>Coming Soon page</header>
        <p>Our website is under construction. We're working hard to improve our website and we'll be ready to launch after.</p>
        <div className="time-content">
          <div className="time days">
            <span className="number">{days < 10 ? `0${days}` : days}</span>
            <span className="text">days</span>
          </div>

          <div className="time hours">
            <span className="number">{hours < 10 ? `0${hours}` : hours}</span>
            <span className="text">hours</span>
          </div>

          <div className="time minutes">
            <span className="number">{minutes < 10 ? `0${minutes}` : minutes}</span>
            <span className="text">minutes</span>
          </div>

          <div className="time seconds">
            <span className="number">{seconds < 10 ? `0${seconds}` : seconds}</span>
            <span className="text">seconds</span>
          </div>
        </div>

        <div className="email-content">
          <p>Subscribe now to get the latest updates!</p>
        </div>

        <div className="input-box">
          <input type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
        </div>
      </section>
  )
}

export default ComingSoon