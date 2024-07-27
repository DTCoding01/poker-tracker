import "./SessionDetail.css";
import calculateSessionLength from "../../utils/calculateSessionLength";

const SessionDetail = ({ session }) => {
  const { hours, minutes } = calculateSessionLength(
    session.startTime,
    session.endTime
  );
  const profit = session.endBalance - session.startBalance;
  return (
    <section className="session-detail">
      <p>£{profit}</p>
      <p>{session.gameType}</p>
      <p>
        Session Length: {hours}h {minutes}m
      </p>
    </section>
  );
};

export default SessionDetail;
