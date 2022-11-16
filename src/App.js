import { useEffect, useState } from "react";
import "./App.css";
import Dialer from "./customComponents/Dialer";

function App() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="App">
      <Dialer currentTime={currentTime} />
    </div>
  );
}

export default App;
