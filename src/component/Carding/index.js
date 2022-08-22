import React from "react";
import { deleteLogo } from "../../assets";

const Carding = ({ title, time }) => {
  return (
    <div style={content}>
      <div style={wrapperText}>
        <h4>{title}</h4>
      </div>

      <div style={actionWrapper}>
        <p>{time}</p>
        <img src={deleteLogo} alt="delete" />
      </div>
    </div>
  );
};
export default Carding;

const content = {
  width: 235,
  height: 234,
  backgroundColor: "#ffff",
  marginRight: 20,
  marginBottom: 26,
  borderRadius: 12,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-between",
  boxShadow: " 0px 6px 10px rgba(0, 0, 0, 0.1)",
};
const wrapperText = {
  maxWidth: 182,
  marginLeft: 27,
  marginRight: 26,
};
const actionWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingRight: 26,
  paddingLeft: 26,
};
