import React from "react";
import { plusButton } from "../../assets";
import Gap from "../gap";
import ButtonActive from "./ButtonActive";

const Button = ({ onPressButton, type, onClick }) => {
  if (type === "activeButton") {
    return <ButtonActive onClick={onClick} />;
  } else {
    return (
      <div style={component} onClick={onPressButton}>
        <img src={plusButton} width={14} />
        <Gap width={14} />
        <p style={text}>Tambahkan</p>
      </div>
    );
  }
};

export default Button;

const component = {
  backgroundColor: "#16ABF8",
  width: 159,
  height: 54,
  borderRadius: 45,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const text = {
  fontSize: 18,
  color: "#ffff",
  fontWeight: "600",
};
