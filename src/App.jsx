import React from 'react'
import Countdown from 'react-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import DailyImage from "./components/DailyImage.jsx";

function App() {

   const targetDate = new Date(Date.UTC(2025, 0, 31, 10, 0, 0));

   const renderer = ({ days, hours, minutes, seconds }) => {
      return (
         <div style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif' }}>
            <p>Countdown to powder</p>
            <span>{days} days </span>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
         </div>
      );
   };

   return (
      <>
         <Countdown date={targetDate} renderer={renderer}/>
         <DailyImage overlayText={""}></DailyImage>
         <p>
            <FontAwesomeIcon icon={faSnowflake} size="2x" style={{ color: '#00BFFF' }}/>
            <FontAwesomeIcon icon={faSnowflake} size="2x" style={{ color: '#00BFFF' }}/>
            <FontAwesomeIcon icon={faSnowflake} size="2x" style={{ color: '#00BFFF' }}/>
         </p>
      </>
   )
}

export default App
