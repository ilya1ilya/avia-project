import { Checkbox } from "antd";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setFiltersCheckedList,
  updateFlightsList,
} from "../../../store/flightsSlice";

import styles from "./Filter.module.scss";

import type { CheckboxValueType } from "antd/es/checkbox/Group";

const plainOptions = ["С 1-й пересадкой", "Без пересадок"];

const Filter = () => {
  const filtersCheckedList = useAppSelector(
    (state) => state.flights.filtersCheckedList
  );
  const dispatch = useAppDispatch();

  const onChange = (list: CheckboxValueType[]) => {
    dispatch(setFiltersCheckedList(list));
    dispatch(updateFlightsList());
  };

  return (
    <div className={styles["filter-container"]}>
      <span className={styles["filter-container-title"]}>Фильтровать</span>

      <Checkbox.Group
        options={plainOptions}
        value={filtersCheckedList}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
