import { Radio, Space } from "antd";

import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import {
  updateFlightsList,
  updateSortingValue,
} from "../../../store/flightsSlice";

import styles from "./Sorting.module.scss";

import type { RadioChangeEvent } from "antd";

const Sorting = () => {
  const sortingValue = useAppSelector((state) => state.flights.sortingValue);
  const dispatch = useAppDispatch();

  const onChange = (e: RadioChangeEvent) => {
    dispatch(updateSortingValue(e.target.value));
    dispatch(updateFlightsList());
  };

  return (
    <div className={styles["sorting-container"]}>
      <span className={styles["sorting-container-title"]}>Сортировать</span>

      <Radio.Group onChange={onChange} value={sortingValue}>
        <Space direction="vertical">
          <Radio value={"price-ascending"}>- по возрастанию цены</Radio>
          <Radio value={"price-descending"}>- по убыванию цены</Radio>
          <Radio value={"travel-duration"}>- по времени в пути</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default Sorting;
