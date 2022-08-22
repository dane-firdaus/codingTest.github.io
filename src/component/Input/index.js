import React from "react";

const Input = () => {
  return (
    <div>
      <h1 style={title}>NAMA LIST ITEM</h1>
      <input placeholder="Tambahkan nama list item" style={inputComponent} />
    </div>
  );
};
export default Input;

const inputComponent = {
  width: 759,
  height: 52,
  fontSize: 16,
  fontWeight: 400,
  paddingLeft: 18,
  border: "1px solid #E5E5E5",
  fontFamily: "Poppins",
  borderRadius: 6,
};
const title = {
  height: 18,
  fontSize: 12,
  fontWeight: 600,
  //   fontFamily: "Poppins",
  fontStyle: "normal",
  lineHeight: "18px",
};
