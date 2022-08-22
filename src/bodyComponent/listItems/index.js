import React from "react";
import { Header, List } from "../../component";

const ListItems = () => {
  return (
    <div style={content}>
      <Header />
      <List />
    </div>
  );
};
export default ListItems;

const content = {
  marginRight: 220,
  marginLeft: 220,
  marginTop: 43,
  paddingBottom: 20,
};
