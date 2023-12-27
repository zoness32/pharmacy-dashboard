import { Visit } from "@prisma/client";
import dayjs from "dayjs";

export const getDisplayableAdministrationLocation = (visit: Visit) => {
  return visit.administration_location === "inhome" ? "In Home" : "Hospital";
}

export const getHHMMSSFromSeconds = (numSeconds: number) => {
  return dayjs(numSeconds * 1000).toISOString().slice(11, 19);
}

export const getDateTimeInUSFormat = (date: Date) => {
  return dayjs(date).format('MM/DD/YYYY hh:mm:ss');
}