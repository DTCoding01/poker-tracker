import React from 'react';
import Stats from "../Stats/Stats";
import TotalProfit from "../TotalProfit/TotalProfit";
import Graph from '../Graph/Graph';
import StatBreakdown from '../StatBreakdown/StatBreakdown';
import './Dashboard.css';

const Dashboard = ({ allSessions }) => {
  return (
    <section className="dashboard">
      <TotalProfit allSessions={allSessions}/>
      <Stats allSessions={allSessions}/>
      <StatBreakdown allSessions={allSessions} />
      <Graph allSessions={allSessions}/>
    </section>
  );
};

export default Dashboard;
