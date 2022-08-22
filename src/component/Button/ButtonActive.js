import React from "react";

const ButtonActive = ({ onClick }) => {
  return (
    <div style={content} onClick={onClick}>
      <p style={title}>simpan</p>
    </div>
  );
};

export default ButtonActive;

const content = {
  height: 54,
  width: 150,
  backgroundColor: "#16ABF8",
  borderRadius: 45,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};
const title = {
  fontSize: 18,
  fontWeight: 600,
  color: "#ffff",
  textAlign: "center",
};
