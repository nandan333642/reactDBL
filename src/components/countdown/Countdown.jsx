import React, {useState, useEffect} from 'react'
import './countdown.css';



const Countdown = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

  const deadLine = "July, 15, 2023";

  const getTime = () => {
    const time = Date.parse(deadLine) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadLine), 1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="bt_countdown">
        <div className="balls"></div>


        {seconds<0?  <div className="bt_countdown_live"><b className="specialhigh">We are Live</b></div>: <div className="bt_countdown_container">
          <div className="bt_countdown-days">
            <div className="bt_countdown-days-text">
              <h2 className="highlighter">{days<10? "0"+days : days}</h2>
              <p>Days</p>
            </div>
          </div>

          <div className="bt_countdown-colon">:</div>
          
          <div className="bt_countdown-hours">
            <div className="bt_countdown-hours-text">
                <h2 className="highlighter">{hours<10? "0"+hours : hours}</h2>
                <p>Hours</p>
            </div>
          </div>



          <div className="break"></div>

          
          <div className="bt_countdown-minutes">
            <div className="bt_countdown-minutes-text">
                  <h2 className="highlighter">{minutes<10? "0"+minutes : minutes}</h2>
                  <p>Minutes</p>
            </div>
          </div>

          <div className="bt_countdown-colon">:</div>

          <div className="bt_countdown-seconds">
            <div className="bt_countdown-seconds-text">
                  <h2 className="highlighter">{seconds<10? "0"+seconds : seconds}</h2>
                  <p>Seconds</p>
            </div>
          </div>
        </div>
}
        

        

        <div class="balls-corner"></div>
    </div>
  )
}

export default Countdown