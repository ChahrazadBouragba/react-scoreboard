
import './App.css';
import { useState, useEffect } from "react";

const currentDate = new Date();

function App() {
let [count1, setCount] = useState(0);
let [count2, setCount2] = useState(0);
const [currentTime, setCurrentTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
// let [clock, setClock] = useState(null);




useEffect(() => {
  let intervalID;
  if (isRunning) {
    intervalID = setInterval(() => {
      setCurrentTime(currentTime => currentTime + 1);
    }, 1000);
  }

  return () => clearInterval(intervalID);
}, [isRunning]);

const handleStartStopClick = () => {
  setIsRunning(isRunning => !isRunning);
};

  
const handleResetClick = () => {
  setCurrentTime(0);
  setCount(0);
  setCount2(0);
};

  //* format the time in "mm:ss" format
  const formattedTime = new Date(currentTime * 1000)

    // Turning the Date object into a string
    .toISOString()

    // 14 - the starting index of the substring
    // 5 - length of the substring.
    //we start at index 14 to skip the year, month, day, "T", and hour parts of the string. We then extract 5 characters from that point, which corresponds to the minutes and seconds parts of the string.
    .substr(14, 5);

  return (
    <div className="App">

    <div class="wrapper">

      <header>
          {/* <div>{currentDate.toString()}</div> */}
          {isRunning ? (
            <img src="../img/pause (1).png" class="clockButtons" onClick={handleStartStopClick}/>
            ) : (
              <img class="clockButtons" src='../img/play-button.png' onClick={handleStartStopClick}/>
              )}
          
          <img class="clockButtons" src="../img/reloading.png" onClick={handleResetClick}/>
          
          
          <div className="clock">{formattedTime}</div>
      </header>
     
      <div class="teams">
            <div class="team1Buttons">
                <p  onClick={() => setCount(count1 + 1)}> +1 </p>
                <p onClick={() => setCount(count1 - 1)}>-1</p>
                {/* <button onClick={() => setCount(count1 = 0)}>Set to Zero</button> */}
            </div>
          <section class="team1">
            <h2>team 1</h2>
            <span style={{ backgroundColor: count1 >= count2 ? "#5D9C59" : "#DF2E38" }}>{count1}</span>

          </section>

          
          <section class="team2">
            <h2>team 2</h2>
            <span style={{ backgroundColor: count2 < count1 ? "#DF2E38" : "#5D9C59" }}>{count2}</span>
            
          </section>
          <div class="team2Buttons">
            <p onClick={() => setCount2(count2 + 1)}>+1</p>
            <p onClick={() => setCount2(count2 - 1)}>-1</p>
                {/* <button onClick={() => setCount2(count2 = 0)}>Set to Zero</button> */}
          </div>
      </div>


      </div>
    </div>
  );
}

export default App;
