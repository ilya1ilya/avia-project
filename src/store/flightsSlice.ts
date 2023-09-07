import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CheckboxValueType } from "antd/es/checkbox/Group";

import { FlightsState } from "../types";

import filteredNormalizedFlights from "../data/normalizedFlights";
import { sortingTypes, MAX_TICKET_PRICE, MIN_TICKET_PRICE } from "../utils";

const initialState: FlightsState = {
  list: filteredNormalizedFlights,
  sortingValue: "price-ascending",
  filtersCheckedList: ["С 1-й пересадкой", "Без пересадок"],
  priceRange: [MIN_TICKET_PRICE, +(MAX_TICKET_PRICE / 2).toFixed(0)],
  airlinesCheckedList: ["LO", "BT"],
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    updateSortingValue(
      state,
      action: PayloadAction<(typeof initialState)["sortingValue"]>
    ) {
      state.sortingValue = action.payload;
    },
    updateFlightsList(state) {
      let newList = [...filteredNormalizedFlights];

      newList = newList.filter((flight) => {
        const [priceRangeFrom, priceRangeTo] = state.priceRange;
        if (
          +flight.price.amount < priceRangeFrom ||
          +flight.price.amount > priceRangeTo
        ) {
          return false;
        }

        const { uid } = flight.carrier;
        if (!state.airlinesCheckedList.includes(uid)) {
          return false;
        }

        const singleStops = flight.singleTicket.stops;
        const returnStops = flight.returnTicket.stops;

        const currentFlightValue =
          singleStops === 1 || returnStops === 1
            ? "С 1-й пересадкой"
            : "Без пересадок";

        return state.filtersCheckedList.includes(currentFlightValue);
      });

      newList.sort(sortingTypes[state.sortingValue]);

      state.list = newList;
    },
    setFiltersCheckedList(state, action: PayloadAction<CheckboxValueType[]>) {
      state.filtersCheckedList = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setAirlinesCheckedList(state, action: PayloadAction<CheckboxValueType[]>) {
      state.airlinesCheckedList = action.payload;
    },
  },
});

export const {
  updateSortingValue,
  updateFlightsList,
  setFiltersCheckedList,
  setPriceRange,
  setAirlinesCheckedList,
} = flightsSlice.actions;

export default flightsSlice.reducer;
