import data from "../data/flights.json";

import { Flight } from "../types";

const flights = data.result.flights;

const normalizedFlights = flights.map(({ flight, flightToken }) => {
  const { carrier, price, legs } = flight;

  // single ticket info:
  const singleTicketDepartureInfo = legs[0]["segments"][0];
  const singleTicketDepartureCity =
    singleTicketDepartureInfo["departureCity"]?.["caption"];
  if (!singleTicketDepartureCity) {
    return undefined;
  }
  const singleTicketDepartureDate = singleTicketDepartureInfo["departureDate"];

  const singleTicketArrivalInfo =
    legs[0]["segments"].length === 2
      ? legs[0]["segments"][1]
      : legs[0]["segments"][0];
  const singleTicketArrivalCity =
    singleTicketArrivalInfo["arrivalCity"]?.["caption"];
  if (!singleTicketArrivalCity) {
    return undefined;
  }
  const singleTicketDepartureDuration = legs[0]["duration"];
  const singleTicketStops = legs[0]["segments"].length === 2 ? 1 : 0;

  // return ticket info:
  const returnTicketDepartureInfo = legs[1]["segments"][0];
  const returnTicketDepartureCity =
    returnTicketDepartureInfo["departureCity"]?.["caption"];
  if (!returnTicketDepartureCity) {
    return undefined;
  }
  const returnTicketArrivalInfo =
    legs[1]["segments"].length === 2
      ? legs[1]["segments"][1]
      : legs[1]["segments"][0];
  const returnTicketArrivalCity =
    returnTicketArrivalInfo["arrivalCity"]?.["caption"];
  if (!returnTicketArrivalCity) {
    return undefined;
  }
  const returnTicketDepartureDuration = legs[1]["duration"];
  const returnTicketStops = legs[1]["segments"].length === 2 ? 1 : 0;

  return {
    flightToken: flightToken,
    carrier: carrier,
    price: price.total,
    singleTicket: {
      departureCity: singleTicketDepartureCity,
      departureDate: singleTicketDepartureDate,
      arrivalCity: singleTicketArrivalCity,
      arrivalDate: singleTicketArrivalInfo["arrivalDate"],
      travelDuration: singleTicketDepartureDuration,
      stops: singleTicketStops,
    },
    returnTicket: {
      departureCity: returnTicketDepartureCity,
      departureDate: returnTicketDepartureInfo["departureDate"],
      arrivalCity: returnTicketArrivalCity,
      arrivalDate: returnTicketArrivalInfo["arrivalDate"],
      travelDuration: returnTicketDepartureDuration,
      stops: returnTicketStops,
    },
  };
});

const filteredNormalizedFlights: Flight[] = [];

for (const flight of normalizedFlights) {
  if (flight) {
    filteredNormalizedFlights.push(flight);
  }
}

filteredNormalizedFlights.sort((a, b) => +a.price.amount - +b.price.amount);

export default filteredNormalizedFlights;
