
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

      <header>
          {/* <div>{currentDate.toString()}</div> */}
          <button onClick={handleStartStopClick}>🌐</button>
          <div id="clock">{formattedTime}</div>
      </header>
     
      <div class="teams">
          <section class="team1">
          <h2>team 1</h2>
            {count1 >= count2 ? <span style={{color: "green"}}>{count1}</span> : <span style={{color: "red"}}>{count1}</span>}

                <button onClick={() => setCount(count1 + 1)}> +1 </button>
                <button onClick={() => setCount(count1 - 1)}>-1</button>
                {/* <button onClick={() => setCount(count1 = 0)}>Set to Zero</button> */}
          </section>

          <section class="team2">
          <h2>team 2</h2>
          {count2 < count1 ? <span style={{color: "red"}}>{count2}</span> : <span style={{color: "green"}}>{count2}</span>}
                <button onClick={() => setCount2(count2 + 1)}>+1</button>
                <button onClick={() => setCount2(count2 - 1)}>-1</button>
                {/* <button onClick={() => setCount2(count2 = 0)}>Set to Zero</button> */}
          </section>
      </div>

      <button onClick={handleResetClick}>restart</button>
    </div>
  );
}

export default App;
