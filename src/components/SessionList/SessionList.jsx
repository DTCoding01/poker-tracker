import SessionDetail from "../SessionDetail/SessionDetail";
import AddSessionModal from "../AddSession/AddSession";
import { useState } from "react";
import "./SessionList.css";

const SessionList = (props) => {
  const { allSessions, setAllSessions } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSession, setNewSession] = useState({
    id: allSessions.length + 1,
    gameType: "",
    startBalance: "",
    endBalance: "",
    startTime: "",
    endTime: "",
  });

  const handleClick = (sessionId) => {
    const filteredSessions = allSessions.filter(
      (session) => session.id !== sessionId
    );
    setAllSessions(filteredSessions);
  };

  const handleAddNewSession = () => {
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSession({
      ...newSession,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllSessions([...allSessions, newSession]);
    console.log(allSessions)
    setIsModalOpen(false);
    setNewSession({
      id: "",
      gameType: "",
      startBalance: "",
      endBalance: "",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <section className="session-list">
      <button className="add-session" onClick={handleAddNewSession}>
        Add New Session
      </button>
      <ul>
        {allSessions.map((session, index) => (
          <li key={index}>
            <SessionDetail session={session} />
            <button
              className="delete-session"
              onClick={() => handleClick(session.id)}
            >
              Delete Session
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <AddSessionModal
          setIsModalOpen={setIsModalOpen}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          newSession={newSession}
        />
      )}
    </section>
  );
};

export default SessionList;
