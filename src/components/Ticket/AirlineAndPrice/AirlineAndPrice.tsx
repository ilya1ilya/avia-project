import { Carrier, Price } from "../../../types";

import styles from "./AirlineAndPrice.module.scss";

interface Props {
  carrier: Carrier;
  price: Price;
}

const AirlineAndPrice = ({ carrier, price }: Props) => {
  return (
    <div className={styles["airline-and-price-container"]}>
      <span>{carrier.caption}</span>
      <span>{price.amount} ₽</span>
    </div>
  );
};

export default AirlineAndPrice;
