import React from "react";
import { backButton, edit, sort } from "../../assets";
import Button from "../Button";

const BackFilterHeader = ({ titles, onClick, onPressButton }) => {
  return (
    <div style={content}>
      <div style={wrapper}>
        <div onClick={onClick}>
          <img src={backButton} height={32} width={32} />
        </div>
        <h1 style={title}>{titles}</h1>
        <img src={edit} height={24} width={24} />
      </div>
      <div style={btnwrapper}>
        <img src={sort} style={sortImage} />
        <Button onPressButton={onPressButton} />
      </div>
    </div>
  );
};
export default BackFilterHeader;
const content = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 54,
  marginBottom: 45,

  // paddingTop: 43,
};
const title = {
  fontSize: 36,
  fontWeight: 700,
  marginLeft: 19,
  marginRight: 23,
  // lineHeight: 43.2,
};
const wrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const btnwrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const sortImage = {
  width: 54,
  height: 54,
  marginRight: 18,
};
