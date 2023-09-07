import { TicketInfo } from "../../../types";

import {
  getNormalizedDateAndTime,
  getNormalizedTravelDuration,
  normalizeCityName,
} from "../../../utils";

import styles from "./Route.module.scss";

interface Props {
  ticketInfo: TicketInfo;
}

const Route = ({ ticketInfo }: Props) => {
  const {
    departureCity,
    departureDate,
    arrivalCity,
    arrivalDate,
    travelDuration,
    stops,
  } = ticketInfo;

  const [depDate, depTime] = getNormalizedDateAndTime(departureDate);
  const [arrivDate, arrivTime] = getNormalizedDateAndTime(arrivalDate);
  const [hours, minutes] = getNormalizedTravelDuration(travelDuration);
  const depCity = normalizeCityName(departureCity);
  const arrivCity = normalizeCityName(arrivalCity);
  const numberOfTransfers = stops === 0 ? "Без пересадок" : "1 пересадка";

  return (
    <div className={styles["route-container"]}>
      <div className={styles["route-container__route-from"]}>
        <div className={styles["route-container__route-from__origin"]}>
          <span className={styles["route-container-time"]}>{depTime}</span>
          <span className={styles["route-container-city"]}>{depCity}</span>
          <span className={styles["route-container-date"]}>{depDate}</span>
        </div>
        <div className={styles["route-container__route-from__path"]}>
          <span>
            Время в пути: {hours}ч {minutes}м
          </span>
          <span>{numberOfTransfers}</span>
        </div>
        <div className={styles["route-container__route-from__destination"]}>
          <span className={styles["route-container-time"]}>{arrivTime}</span>
          <span className={styles["route-container-city"]}>{arrivCity}</span>
          <span className={styles["route-container-date"]}>{arrivDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Route;
