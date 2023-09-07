import { Button, Divider } from "antd";

import { Carrier, Price, TicketInfo } from "../../types";

import AirlineAndPrice from "./AirlineAndPrice";
import Route from "./Route";

import styles from "./Ticket.module.scss";

interface Props {
  carrier: Carrier;
  price: Price;
  singleTicket: TicketInfo;
  returnTicket: TicketInfo;
}

const Ticket = ({ carrier, price, singleTicket, returnTicket }: Props) => {
  return (
    <div className={styles["ticket-container"]}>
      <AirlineAndPrice carrier={carrier} price={price} />
      <Route ticketInfo={singleTicket} />
      <Divider className={styles["ticket-container-divider"]} />
      <Route ticketInfo={returnTicket} />
      <Button className={styles["ticket-container-buy-button"]} type="primary">
        Купить билет
      </Button>
    </div>
  );
};

export default Ticket;
