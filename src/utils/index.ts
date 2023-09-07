import { Flight } from "../types";

export const MAX_TICKET_PRICE = 149335;
export const MIN_TICKET_PRICE = 21049;

export const AIRLINES_NAMES_AND_KEYS = [
  ["LOT Polish Airlines", "LO"],
  ["Air Baltic Corporation A/S", "BT"],
  ["Air France", "AF"],
  ["KLM", "KL"],
  ["Brussels Airlines", "SN"],
  ["TURK HAVA YOLLARI A.O.", "TK"],
  ["Аэрофлот - российские авиалинии", "SU1"],
  ["Alitalia Societa Aerea Italiana", "AZ"],
  ["Finnair Oyj", "AY"],
  ["Pegasus Hava Tasimaciligi A.S.", "PC"],
];

export const getNormalizedDateAndTime = (fullDate: string) => {
  const dateAndTime = fullDate.split("T");

  const date = dateAndTime[0];

  let time = dateAndTime[1];
  time = time.slice(0, -3);

  return [date, time];
};

export const getNormalizedTravelDuration = (travelDuration: number) => {
  const hours = (travelDuration / 60).toFixed(0);
  const minutes = travelDuration % 60;

  return [hours, minutes];
};

export const normalizeCityName = (cityName: string) => {
  cityName = cityName.toLowerCase();

  return cityName[0].toUpperCase() + cityName.slice(1);
};

export const sortingTypes = {
  "price-ascending": (a: Flight, b: Flight) =>
    +a.price.amount - +b.price.amount,
  "price-descending": (a: Flight, b: Flight) =>
    +b.price.amount - +a.price.amount,
  "travel-duration": (a: Flight, b: Flight) =>
    a.singleTicket.travelDuration +
    a.returnTicket.travelDuration -
    (b.singleTicket.travelDuration + b.returnTicket.travelDuration),
};
