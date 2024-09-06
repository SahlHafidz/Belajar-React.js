import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="container">
      <div className="container-counter">
        <div className="display">
          <input type="text" value={value} />
        </div>
        <button onClick={(e) => setValue(value + 1)}>+</button>
        <button onClick={(e) => setValue(0)}>reset</button>
        <button disabled onClick={(e) => setValue(value - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
