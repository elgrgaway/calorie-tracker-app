import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { getDateFromString } from "@root/utils";
import { TextContent } from "@root/common";
import { useLoadData } from "@root/utils/hooks";
export function DetailPage() {
  const params = useParams();
  const [detail, _, error] = useLoadData(
    `http://localhost:3000/records/${params.recordId}`,
    "single"
  );
  const details = error ? (
    <TextContent value={error} />
  ) : (
    detail && (
      <>
        <ul className={styles.container}>
          <li className={styles.item}>
            <p>Date:</p>
            <p>{detail.date.toLocaleString()}</p>
          </li>
          <li className={styles.item}>
            <p>Meal:</p>
            <p>{detail.meal}</p>
          </li>
          <li className={styles.item}>
            <p>Content:</p>
            <p>{detail.content}</p>
          </li>
          <li className={styles.item}>
            <p>Calories:</p>
            <p>{detail.calories}</p>
          </li>
        </ul>
      </>
    )
  );
  return (
    <>
      {details}
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
}
