import Stats from "../Stats/Stats";
import TotalProfit from "../TotalProfit/TotalProfit";
import Graph from '../Graph/Graph.jsx'
import './Dashboard.css'
const Dashboard = ({ allSessions }) => {
  return (
    <section className="dashboard">
      <TotalProfit allSessions={allSessions}/>
      <Stats allSessions={allSessions}/>
      <Graph allSessions={allSessions}/>
    </section>
  );
};

export default Dashboard;
