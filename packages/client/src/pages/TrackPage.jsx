import { RecordList } from "@components/records";
import styles from "./TrackPage.module.css";
import { useLoadData } from "@root/utils/hooks";
import { Link } from "react-router-dom";
import { TextContent } from "@root/common";
import { useContext } from "react";
import { AppContext } from "@root/AppContext";
export function TrackPage() {
  const { currentDateStr, setCurrentDate } = useContext(AppContext);
  const [records, loading, error, refreshData] = useLoadData(
    `http://localhost:3000/records?date=${currentDateStr}`
  );

  const dateChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };

  let content = <RecordList records={records} refresh={refreshData} />;

  if (error) {
    content = <TextContent value={error} />;
  }

  if (loading) {
    content = <TextContent value="Loading..." />;
  }

  const formSubmitHandler = (record) => {
    save(record);
  };

  return (
    <div>
      <h1 className={styles.title}>Calorie Tracker</h1>
      <div className={styles.controls}>
        <div>
          <label
            className={styles["listing-picker-label"]}
            htmlFor="listingDate"
          >
            Select date
          </label>
          <input
            id="listingDate"
            type="date"
            className={styles["listing-picker-input"]}
            value={currentDateStr}
            onChange={dateChangeHandler}
          />
        </div>
        <Link to="create" className={styles["add-btn"]}>
          Track food
        </Link>
      </div>
      {content}
    </div>
  );
}
