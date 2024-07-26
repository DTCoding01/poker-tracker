import SessionDetail from "../SessionDetail/SessionDetail";
import AddSessionModal from "../AddSession/AddSession";
import { useState } from "react";

const SessionList = (props) => {
  const { allSessions, setAllSessions } = props;
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (sessionId) => {
    const filteredSessions = allSessions.filter(
      (session) => session.id !== sessionId
    );
    setAllSessions(() => {
      return filteredSessions;
    });
  };

  const handleAddNewSession = () => {
    setIsModalOpen(true)
  }


  return (
    <section>
      <button>Add New Session</button>
      <ul>
        {allSessions.map((session, index) => (
          <li key={index}>
            <SessionDetail session={session} />
            <button onClick={() => handleClick(session.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && <AddSessionModal setIsModalOpen={setIsModalOpen} handleChange={handleChange}/>}
    </section>
  );
};

export default SessionList;
