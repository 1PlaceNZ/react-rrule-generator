const computeWeekStartDay = (data, rruleObj) => {
  if (data.options.weekStartsOnSunday) {
    return data.options.weekStartsOnSunday;
  }
  return rruleObj.wkst === 6;
};

export default computeWeekStartDay;
