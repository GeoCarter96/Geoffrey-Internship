import react from "react";
import  {useEffect, useState} from 'react'

const Countdown = ({ targetTimestamp }) => {

  const calculateTimeLeft = () => {
    const difference = targetTimestamp - Date.now();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { h: 0, m: 0, s: 0 };
    }
    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
     const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]);

  const pad = (n) => n.toString().padStart(2, '0');
  const pads =(n) =>n.toString().padStart(1, '0')
  return (
    
    <div  >
      
     {pads(time.h)}h {pad(time.m)}m {pad(time.s)}s
      
  
    </div>
  )
};

export default Countdown


