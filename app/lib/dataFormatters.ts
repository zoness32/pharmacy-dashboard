import dayjs from "dayjs";

export const getHHMMSSFromSeconds = (numSeconds: number) => {
  return dayjs(numSeconds * 1000).toISOString().slice(11, 19);
}

export const getDateTimeInUSFormat = (date: Date) => {
  return dayjs(date).format('MM/DD/YYYY hh:mm:ss');
}