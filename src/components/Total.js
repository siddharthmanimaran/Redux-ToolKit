import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.pr.total);
  const logDet = useSelector((state) => state.ur.logIn);
  return (
    <div className="customDiv">
      <h3>Total Component-{logDet}</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};

export default Total;
