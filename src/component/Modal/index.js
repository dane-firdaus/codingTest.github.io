import React, { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import { closeButton } from "../../assets";
import { Priority } from "../../utils/data";
import { verihigh, high, medium, low, verylow } from "../../assets";

const Modal = ({ active, onPressButton, onCloses }) => {
  const [prioritys, setPrioritys] = useState("");

  const testing = [
    {
      label: "bebeas",
      value: "apa-aja",
    },
    {
      label: "semua sama",
      value: "terserah",
    },
  ];
  if (active) {
    return (
      <div style={container}>
        <div style={modalBox}>
          <div style={wrapper}>
            <div style={headerwrapper}>
              <p style={title}>Tambah List Item</p>
              <div onClick={onCloses}>
                <img src={closeButton} style={closeIcon} />
              </div>
            </div>
            <div style={inputwrapper}>
              <Input />
            </div>
            <div style={dropdownwrapper}>
              <Dropdown options={Priority} />
            </div>
            <div style={bottomwrapper}>
              <div style={buttonwrapper}>
                <Button type="activeButton" onClick={() => console.log("berhasil")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Modal;
const container = {
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  left: 0,
  top: 0,
};
const modalBox = {
  position: "absolute",
  //   textAlign: "center",
  transform: "translate(-50%, -50%)",
  animationName: "show",
  animationDuration: "1.8s",
  top: "50%",
  left: "50%",
  width: 830,
  height: 403,
  backgroundColor: "#ffff",
  borderRadius: 12,
};
const wrapper = {};

const headerwrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #E5E5E5",
};

const title = { fontSize: 18, fontWeight: 600, marginTop: 24, marginBottom: 19, marginLeft: 30 };

const closeIcon = {
  width: 24,
  height: 24,
  top: 26,
  right: 41,
  position: "absolute",
};

const inputwrapper = {
  marginLeft: 30,
  marginTop: 38,
  marginRight: 41,
};

const dropdownwrapper = {
  marginLeft: 30,
  width: 205,
  marginTop: 26,
};

const buttonwrapper = {
  position: "absolute",
  left: 640,
  marginTop: 8,
};

const bottomwrapper = {
  width: "100%",
  borderTop: "1px solid #E5E5E5",
  marginTop: 23,
};
