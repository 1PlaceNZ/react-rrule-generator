const computeDailyInterval = (data, rruleObj) => {
  if (rruleObj.freq !== 3) {
    return data.repeat.daily.interval;
  }

  if (rruleObj.interval) {
    return rruleObj.interval;
  }
  
  return 1;
};

export default computeDailyInterval;
