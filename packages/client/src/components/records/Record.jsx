import { useContext, useEffect } from "react";

import styles from "./Record.module.css";
import { StyledRecordCell } from "@common";
import { AppContext } from "@root/AppContext";

export function Record(props) {
  const { setTotalCalories: addCalories } = useContext(AppContext);
  async function deleteHandler(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/records/${props.id}`, {
      method: "DELETE",
    });

    props.refresh?.();
  }
  if (props.calories < 0) {
    return null;
  }

  useEffect(() => {
    addCalories((prevTotal) => prevTotal + props.calories);

    return () => {
      addCalories((prevTotal) => prevTotal - props.calories);
    };
  }, []);

  return (
    <ul className={styles.record}>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className={styles["record-calories"]}>
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
      <li className={styles.delete} onClick={deleteHandler}>
        delete
      </li>
    </ul>
  );
}
