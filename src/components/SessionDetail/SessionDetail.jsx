import './SessionDetail.css'

const SessionDetail = (props) => {
  const { session } = props;
  const profit = session.endBalance - session.startBalance;
  return (
    <section className='session-detail'>
      <p>£{profit}</p>
      <p>{session.gameType}</p>
      <p>Session Length: {}</p>
    </section>
  );
};

export default SessionDetail;
