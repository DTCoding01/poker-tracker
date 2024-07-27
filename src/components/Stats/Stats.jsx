import calculateSessionLength from "../../utils/calculateSessionLength";
import "./Stats.css";

const Stats = ({ allSessions }) => {
  let totalMinutes = 0;
  let totalHours = 0;
  let wins = 0;
  let losses = 0;

  allSessions.forEach((session) => {
    const { hours, minutes } = calculateSessionLength(
      session.startTime,
      session.endTime
    );
    totalHours += hours;
    totalMinutes += minutes;

    if (session.endBalance > session.startBalance) {
      wins++;
    } else if (session.endBalance < session.startBalance) {
      losses++;
    }
  });

  totalHours += Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;

  const totalHoursWithFraction = totalHours + totalMinutes / 60;

  const totalSessions = wins + losses;
  const winPercentage = totalSessions > 0 ? (wins / totalSessions) * 100 : 0;

  return (
    <section className="stats">
      <section className="stat-container">
        <p className="stat-heading-small">Hours</p>
        <p className="stat-value">{totalHoursWithFraction.toFixed(2)}</p>
      </section>
      <section className="stat-container">
        <p className="stat-heading-small">Sessions</p>
        <p className="stat-value">{allSessions.length}</p>
      </section>
      <section className="stat-container">
        <p className="stat-heading-small">W/L %</p>
        <p className="stat-value">{winPercentage.toFixed(1)}</p>
      </section>
    </section>
  );
};

export default Stats;
