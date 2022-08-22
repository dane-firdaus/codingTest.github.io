import React from "react";
import Button from "../Button";
import BackFilterHeader from "./backFilterHeader";
import BackHeader from "./backHeader";

const Header = ({ type, text, titles, onClick, onPress, onPressButton }) => {
  if (type === "backFilterHeader") {
    return <BackFilterHeader titles={titles} onClick={onClick} onPressButton={onPressButton} />;
  }
  if (type === "backHeader") {
    return <BackHeader text={text} onPress={onPress} onPressButton={onPressButton} />;
  } else {
    return (
      <div style={content}>
        <h1 style={title}>Activity</h1>
        <Button onPressButton={onPressButton} />
      </div>
    );
  }
};

export default Header;

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
  // lineHeight: 43.2,
};
