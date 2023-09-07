import { Checkbox, Space } from "antd";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setAirlinesCheckedList,
  updateFlightsList,
} from "../../../store/flightsSlice";
import { AIRLINES_NAMES_AND_KEYS } from "../../../utils";

import styles from "./Airlines.module.scss";

import type { CheckboxValueType } from "antd/es/checkbox/Group";

const Airlines = () => {
  const airlinesCheckedList = useAppSelector(
    (state) => state.flights.airlinesCheckedList
  );
  const dispatch = useAppDispatch();

  const onChange = (list: CheckboxValueType[]) => {
    dispatch(setAirlinesCheckedList(list));
    dispatch(updateFlightsList());
  };

  const renderAirlines = () => {
    return AIRLINES_NAMES_AND_KEYS.map((airline) => {
      const [name, uid] = airline;
      return (
        <Checkbox key={uid} value={uid}>
          {name}
        </Checkbox>
      );
    });
  };

  return (
    <div className={styles["airlines-container"]}>
      <span className={styles["airlines-container-title"]}>Авиакомпании</span>

      <Checkbox.Group value={airlinesCheckedList} onChange={onChange}>
        <Space direction="vertical">{renderAirlines()}</Space>
      </Checkbox.Group>
    </div>
  );
};

export default Airlines;
