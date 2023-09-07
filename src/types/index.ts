import { CheckboxValueType } from "antd/es/checkbox/Group";

export type Carrier = Record<"uid" | "caption" | "airlineCode", string>;

export type Price = Record<"amount" | "currency" | "currencyCode", string>;

export type TicketInfo = {
  departureCity: string;
  departureDate: string;
  arrivalCity: string;
  arrivalDate: string;
  travelDuration: number;
  stops: number;
};

export type Flight = {
  flightToken: string;
  carrier: Carrier;
  price: Price;
  singleTicket: TicketInfo;
  returnTicket: TicketInfo;
};

export type FlightsState = {
  list: Flight[];
  sortingValue: "price-ascending" | "price-descending" | "travel-duration";
  filtersCheckedList: CheckboxValueType[];
  priceRange: [number, number];
  airlinesCheckedList: CheckboxValueType[];
};
