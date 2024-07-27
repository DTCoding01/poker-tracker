import React from 'react';
import './StatBreakdown.css';

const StatBreakdown = ({ allSessions }) => {
  const calculateProfit = (session) => session.endBalance - session.startBalance;

  const calculateDuration = (session) => {
    const start = session.startTime;
    const end = session.endTime;
    const startHours = Math.floor(start / 100);
    const startMinutes = start % 100;
    const endHours = Math.floor(end / 100);
    const endMinutes = end % 100;
    const durationHours = endHours + endMinutes / 60 - (startHours + startMinutes / 60);
    return durationHours;
  };

  const totalSessions = allSessions.length;
  const totalProfit = allSessions.reduce((acc, session) => acc + calculateProfit(session), 0);
  const totalHours = allSessions.reduce((acc, session) => acc + calculateDuration(session), 0);
  const sessionsWon = allSessions.filter(session => calculateProfit(session) >= 0).length;
  const sessionsLost = allSessions.filter(session => calculateProfit(session) < 0).length;
  const averageSessionProfit = totalSessions > 0 ? (totalProfit / totalSessions).toFixed(2) : 0;
  const hourlyRate = totalHours > 0 ? (totalProfit / totalHours).toFixed(2) : 0;

  return (
    <div className="stat-breakdown">
      <h2>Stat Breakdown</h2>
      <ul>
        <li>Hourly Rate: £{hourlyRate}</li>
        <li>Sessions Won: {sessionsWon}</li>
        <li>Sessions Lost: {sessionsLost}</li>
        <li>Average Session Profit: £{averageSessionProfit}</li>
      </ul>
    </div>
  );
};

export default StatBreakdown;
