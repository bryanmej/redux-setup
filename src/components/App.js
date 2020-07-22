import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state.text);

  return <h1>{state.text}</h1>;
};

export default App;
