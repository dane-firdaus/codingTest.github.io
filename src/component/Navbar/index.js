import React from "react";

const Navbar = () => {
  return (
    <div style={navBar}>
      <div style={wrapper}>
        <h2 style={navText}>TO DO LIST APP</h2>
      </div>
    </div>
  );
};
export default Navbar;
const navBar = {
  width: "100%",
  height: "105px",
  backgroundColor: "#16ABF8",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};
const navText = {
  weight: "700",
  size: 24,
  color: "#ffff",
  margin: 0,
};

const wrapper = {
  paddingTop: 38,
  paddingLeft: 250,
  paddingBottom: 31,
};
