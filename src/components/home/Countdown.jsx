import react from "react";
import  {useEffect, useState} from 'react'

const Countdown = ({ expiryDate }) => {

  const [text, setText] = useState("");
  const [time, setTime] = useState();

  useEffect(() => {
    calculateTime();

    const time = setInterval(() => {
      calculateTime();
    }, 1000);

    setTime(time);

    return () => {
      clearInterval(time);
    }
  }, []);

  function calculateTime() {
    const millisLeft = expiryDate - Date.now();

    if (millisLeft < 0) {
      clearInterval(time);
      setText("EXPIRED");
      return;
    }

    const secondsLeft = millisLeft / 1000;
    const minutesLeft = secondsLeft / 60;
    const hoursLeft = minutesLeft / 60;

    setText(
      `${Math.floor(hoursLeft)}h ${Math.floor(minutesLeft % 60)}m ${Math.floor(
        secondsLeft % 60
      )}s`
    );
  }

  return <div className="de_countdown" >{text}</div>;
};

export default Countdown


