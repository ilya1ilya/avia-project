import { Slider } from "antd";

import { MIN_TICKET_PRICE, MAX_TICKET_PRICE } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setPriceRange, updateFlightsList } from "../../../store/flightsSlice";

import styles from "./Price.module.scss";

const Price = () => {
  const priceRange = useAppSelector((state) => state.flights.priceRange);
  const dispatch = useAppDispatch();

  const onChange = (value: [number, number]) => {
    dispatch(setPriceRange(value));
    dispatch(updateFlightsList());
  };

  return (
    <div className={styles["price-container"]}>
      <span className={styles["price-container-title"]}>Цена</span>

      <Slider
        range
        defaultValue={priceRange}
        min={MIN_TICKET_PRICE}
        max={MAX_TICKET_PRICE}
        onAfterChange={onChange}
      />
    </div>
  );
};

export default Price;
