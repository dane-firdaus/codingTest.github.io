import React, { useState } from "react";
import { deleteLogo, edit } from "../../assets";
import { verihigh } from "../../assets";

const List = ({ itemName }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div style={content}>
      <div style={wrappercheckbox}>
        <input type="checkbox" defaultChecked={isCheck} onChange={() => setIsCheck(true)} style={checkbox} />
      </div>

      <div style={wrapper}>
        <div style={componentwrapper}>
          <img src={verihigh} height={9} width={9} />
          <p style={title}>{itemName}</p>
          <img src={edit} height={13} width={13} />
        </div>
        <div style={imagewrapper}>
          <img src={deleteLogo} height={18} width={16} />
        </div>
      </div>
    </div>
  );
};
export default List;

const content = {
  height: 80,
  backgroundColor: "#ffff",
  borderRadius: 12,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
  marginBottom: 10,
};
const wrapper = {
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
};

const imagewrapper = {
  marginTop: 31,
  marginBottom: 31,
  marginRight: 30,
};
const wrappercheckbox = {
  marginLeft: 28,
  marginTop: 30,
  marginBottom: 30,
};

const checkbox = {
  height: 20,
  width: 20,
  marginRight: 22,
};
const componentwrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const title = {
  fontSize: 18,
  fontWeight: 500,
  marginLeft: 16,
  marginRight: 19,
};
