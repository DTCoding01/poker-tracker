import "./TotalProfit.css";

const TotalProfit = ({ allSessions }) => {
  let totalProfit = 0;
  allSessions.forEach(
    (session) => (totalProfit += session.endBalance - session.startBalance)
  );

  const profitClass = totalProfit >= 0 ? "profit-positive" : "profit-negative";
  return (
    <section className="total-profit-container">
      <p className="stat-heading">Total Profit</p>
      <p className={`total-profit ${profitClass}`}>£{totalProfit}</p>
    </section>
  );
};

export default TotalProfit;
