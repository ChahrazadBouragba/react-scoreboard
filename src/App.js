
import './App.css';
import { useState } from "react";


function App() {
let [count1, setCount] = useState(0);
let [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <section class="team1">
        {count1 >= count2 ? <span style={{color: "green"}}>{count1}</span> : <span style={{color: "red"}}>{count1}</span>}

            <button onClick={() => setCount(count1 + 1)}>Increase</button>
            <button onClick={() => setCount(count1 - 1)}>Decrease</button>
            <button onClick={() => setCount(count1 = 0)}>Set to Zero</button>
      </section>

      <section class="team2">
      {count2 < count1 ? <span style={{color: "red"}}>{count2}</span> : <span style={{color: "green"}}>{count2}</span>}
            <button onClick={() => setCount2(count2 + 1)}>Increase</button>
            <button onClick={() => setCount2(count2 - 1)}>Decrease</button>
            <button onClick={() => setCount2(count2 = 0)}>Set to Zero</button>
      </section>
    </div>
  );
}

export default App;
