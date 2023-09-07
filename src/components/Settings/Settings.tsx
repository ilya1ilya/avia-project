import Airlines from "./Airlines";
import Filter from "./Filter";
import Price from "./Price";
import Sorting from "./Sorting";

import styles from "./Settings.module.scss";

const Settings = () => {
  return (
    <div className={styles["settings-container"]}>
      <Sorting />
      <Filter />
      <Price />
      <Airlines />
    </div>
  );
};

export default Settings;
