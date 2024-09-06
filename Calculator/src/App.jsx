import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValaue] = useState("");

  return (
    <>
      <div className="container">
        <div className="container-calculator">
          <form action="">
            <div className="display">
              <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="AC" onClick={(e) => setValaue("")} />
              <input
                type="button"
                value="DE"
                onClick={(e) => setValaue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setValaue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValaue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValaue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValaue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValaue(value + e.target.value)}
              />
              <input
                type="button"
                value="="
                className="equal"
                onClick={(e) => setValaue(eval(value))}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
