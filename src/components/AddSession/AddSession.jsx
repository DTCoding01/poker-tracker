import "./AddSession.css";
const AddSessionModal = (props) => {
  const { setIsModalOpen, handleChange, handleSubmit, newSession } = props;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIsModalOpen(false)}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Game Type:
            <input
              type="text"
              name="gameType"
              value={newSession.gameType}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Balance:
            <input
              type="number"
              name="startBalance"
              value={newSession.startBalance}
              onChange={handleChange}
            />
          </label>
          <label>
            End Balance:
            <input
              type="number"
              name="endBalance"
              value={newSession.endBalance}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Time:
            <input
              type="number"
              name="startTime"
              value={newSession.startTime}
              onChange={handleChange}
            />
          </label>
          <label>
            End Time:
            <input
              type="number"
              name="endTime"
              value={newSession.endTime}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Session</button>
        </form>
      </div>
    </div>
  );
};

export default AddSessionModal;
