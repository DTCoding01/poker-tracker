const calculateSessionLength = (startTime, endTime) => {
  const startHour = Math.floor(startTime / 100);
  const startMinutes = startTime % 100;
  const endHour = Math.floor(endTime / 100);
  const endMinutes = endTime % 100;

  const startTotalMinutes = startHour * 60 + startMinutes;
  const endTotalMinutes = endHour * 60 + endMinutes;

  const sessionMinutes = endTotalMinutes - startTotalMinutes;
  const hours = Math.floor(sessionMinutes / 60);
  const minutes = sessionMinutes % 60;

  return { hours, minutes };
};

export default calculateSessionLength