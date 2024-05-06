import { useCounterDown } from "@root/utils/hooks";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const REDIRECT_COUNT = 10;
// const COUNT_DOWN_INTERVAL = 1000;
const HOME_LINK = "/";

export function ErrorPage() {
  const counter = useCounterDown(REDIRECT_COUNT, HOME_LINK);
  return (
    <>
      <h1>Something went wrong...</h1>
      <p>Redirecting to Home Page in {counter}</p>
      <p>
        Or click <Link to={HOME_LINK}>Home page</Link> to go back
      </p>
    </>
  );
}
