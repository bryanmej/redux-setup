import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum, minus } from "../redux/actions";

const App = () => {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch(sum())}>Plus</button>
      <button onClick={() => dispatch(minus())}>Minus</button>
    </>
  );
};

export default App;
