const { format } = require("date-fns");
const moment = require("moment");
const DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000;

exports.convertStringTimeToTimestamp = (time) => {
  const splitedTime = time.split(":");
  const hours = splitedTime[0];
  const hoursInTimestamp = hours * 60;

  return (Number(splitedTime[1]) + hoursInTimestamp) * 60;
};

exports.convertTimestampToTime = (timestamp) => {
  const hours = Math.floor(timestamp / 3600);
  const minutes = Math.floor((timestamp % 3600) / 60);

  return `${hours}:${minutes === 0 ? "00" : minutes}`;
};

exports.convertMinutesToFullHours = (minutes) => {
  const minutesWithoutHours = minutes % 60;
  const hours = Math.floor(minutes / 60);

  return `${hours}:${minutesWithoutHours}`;
};

const getWeekByWeekNumber = (weekNumber, year) => {
  const weekDay = moment(weekNumber, "WW");
  weekDay.set("year", year);

  const week = [];
  for (let i = 1; i <= 7; i++) {
    week.push({
      dayId: i,
      date: weekDay.format("yyyy-MM-DD"),
    });

    weekDay.add(1, "days");
  }

  return week;
};

exports.getWeekByWeekNumber = getWeekByWeekNumber;

exports.getNextWeek = (date) => {
  const firstDay = new Date(date);
  return new Date(firstDay.getTime() + 7 * DAY_IN_MILISECONDS);
};

exports.getBackWeek = (date) => {
  const firstDay = new Date(date);
  const differance = 7 * DAY_IN_MILISECONDS;
  return new Date(firstDay.getTime() - differance);
};

exports.getNextDays = (date, distance) => {
  const d = new Date(date);
  return new Date(d.setDate(d.getDate() + distance));
};