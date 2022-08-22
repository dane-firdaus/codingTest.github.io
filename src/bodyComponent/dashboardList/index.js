import React from "react";
import { Header, Carding } from "../../component";

const DashboardList = ({ title, time }) => {
  return (
    <div>
      <Carding title={title} time={time} />
    </div>
  );
};

export default DashboardList;
