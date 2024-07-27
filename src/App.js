import { useState } from "react";
import SessionList from "./components/SessionList/SessionList";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  const initialSessions = [
    {
      id: 1,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 700,
      startTime: 1900,
      endTime: 2330,
    },
    {
      id: 2,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 200,
      startTime: 1800,
      endTime: 2240,
    },
  ];
  const [allSessions, setAllSessions] = useState(initialSessions);

  return (
    <main>
      <Dashboard allSessions={allSessions} />
      <SessionList allSessions={allSessions} setAllSessions={setAllSessions} />
    </main>
  );
}

export default App;
