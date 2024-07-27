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
      endBalance: 600,
      startTime: 1800,
      endTime: 2200,
    },
    {
      id: 2,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 300,
      startTime: 1700,
      endTime: 2100,
    },
    {
      id: 3,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 750,
      startTime: 1900,
      endTime: 2330,
    },
    {
      id: 4,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 450,
      startTime: 1600,
      endTime: 2030,
    },
    {
      id: 5,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 550,
      startTime: 2000,
      endTime: 2400,
    },
    {
      id: 6,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 650,
      startTime: 1800,
      endTime: 2200,
    },
    {
      id: 7,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 400,
      startTime: 1700,
      endTime: 2100,
    },
    {
      id: 8,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 800,
      startTime: 1900,
      endTime: 2330,
    },
    {
      id: 9,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 350,
      startTime: 1600,
      endTime: 2000,
    },
    {
      id: 10,
      gameType: "holdem",
      startBalance: 500,
      endBalance: 950,
      startTime: 1800,
      endTime: 2230,
    },
  ];

  const [allSessions, setAllSessions] = useState(initialSessions);

  return (
    <main>
      <h1>Poker Session Tracker</h1>
      <section className="main-content">
        <Dashboard allSessions={allSessions} />
        <SessionList
          allSessions={allSessions}
          setAllSessions={setAllSessions}
        />
      </section>
    </main>
  );
}

export default App;
