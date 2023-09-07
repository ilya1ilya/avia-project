import Settings from "./components/Settings";
import Tickets from "./components/Tickets";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["app-container"]}>
      <Settings />
      <Tickets />
    </div>
  );
}

export default App;
