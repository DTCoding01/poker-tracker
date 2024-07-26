const SessionDetail = (props) => {
  const { session } = props;
  const profit = session.endBalance - session.startBalance;
  return (
    <section>
      <p>£{profit}</p>
    </section>
  );
};

export default SessionDetail;
