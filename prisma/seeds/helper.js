const daysAgo = function (days) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  return currentDate;
};

const inXDays = function (days) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
};

module.exports = { daysAgo, inXDays };
