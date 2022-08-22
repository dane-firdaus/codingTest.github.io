import React from "react";
import { backButton, edit } from "../../assets";
import Button from "../Button";

const BackHeader = ({ text, onPress, onPressButton }) => {
  return (
    <div style={content}>
      <div style={wrapper}>
        <div onClick={onPress}>
          <img src={backButton} height={32} width={32} />
        </div>
        <h1 style={title}>{text}</h1>
        <img src={edit} height={24} width={24} />
      </div>
      <Button onPressButton={onPressButton} />
    </div>
  );
};
export default BackHeader;
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
