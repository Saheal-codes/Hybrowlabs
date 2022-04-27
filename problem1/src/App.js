import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [string, setstring] = useState("");
  const [output, setoutput] = useState("");

  const submithandler = useCallback(
    (event) => {
      event.preventDefault();
      if (string.length === 0) {
        return setoutput("Please enter a string");
      }
      let stringcopy = string
        .split("")
        .filter((x) => x !== " ")
        .map((x) => x.toUpperCase());
      let map = {};
      for (let i = 0; i < stringcopy.length; i++) {
        if (map[stringcopy[i]]) {
          map[stringcopy[i]] += 1;
        } else {
          map[stringcopy[i]] = 1;
        }
      }
      let result = Object.keys(map).map((x) => `${x} - ${map[x]}`);
      setoutput(result.join("\n"));
    },
    [string]
  );
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={string}
          onChange={(e) => setstring(e.target.value)}
          placeholder="Enter any string"
        />
        <button onClick={submithandler}>Submit</button>
        <pre>{output}</pre>
      </header>
    </div>
  );
}

export default App;
