import { useState } from "react";
import SessionList from "./components/SessionList/SessionList";
import './App.css'

function App() {
  const initialSessions = [
    {
      id: 1,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 700,
      startTime: 1900,
      endTime: 2300,
    },
    {
      id: 2,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 200,
      startTime: 1800,
      endTime: 2200,
    },
  ];
  const [allSessions, setAllSessions] = useState(initialSessions);

  return <SessionList allSessions={allSessions} setAllSessions={setAllSessions}/>;
}

export default App;
