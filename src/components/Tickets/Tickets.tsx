import { useAppSelector } from "../../hooks/redux";

import Ticket from "../Ticket";

import styles from "./Tickets.module.scss";

const Tickets = () => {
  const flights = useAppSelector((state) => state.flights.list);

  return (
    <div className={styles["tickets-container"]}>
      {flights.map((flight) => {
        const { flightToken, carrier, price, singleTicket, returnTicket } =
          flight;

        return (
          <Ticket
            key={flightToken}
            carrier={carrier}
            price={price}
            singleTicket={singleTicket}
            returnTicket={returnTicket}
          />
        );
      })}
    </div>
  );
};

export default Tickets;
