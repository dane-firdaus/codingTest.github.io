import React from "react";
import { Header } from "../../component";
import ILtodoEmpty from "../../assets/banner";

const ListItemsEmpty = () => {
  return (
    <div style={page}>
      <div style={wrapper}>
        <img src={ILtodoEmpty} height={413} width={541} />
      </div>
    </div>
  );
};

export default ListItemsEmpty;
const wrapper = {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: 25,
};
const page = {
  marginLeft: 220,
  marginRight: 220,
  marginTop: 43,
};
