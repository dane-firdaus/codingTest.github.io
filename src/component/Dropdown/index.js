import React from "react";
import { low } from "../../assets";
import Select, { StylesConfig } from "react-select";
const Dropdown = ({ options, values, defaultValue }) => {
  return (
    <div>
      <p style={title}>PRIORITY</p>
      <Select options={options} values={values} placeholder="Pilih priority" defaultValue={defaultValue} styles={selectStyles} />
    </div>
  );
};

export default Dropdown;

const selectStyles = {
  control: (styles, { data }) => ({ ...styles, textAlign: "center", height: 52, width: 205, color: "#11111", fontSize: 16, fontWeight: 500 }),
  option: (styles, { data }) => ({ ...styles, height: 52, width: 205, ...dot(data.color) }),
  placeholder: (styles, { data }) => ({ ...styles, color: "#11111", fontSize: 16, fontWeight: 500 }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color), justifyContent: "center" }),
  //   input: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const title = {
  fontize: 12,
  fontWeight: 600,
};
