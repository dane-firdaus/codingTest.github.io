import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard, ItemList } from "../../page";

const Router = () => {
  return (
    <Routes>
      <Route path="/details/:id" exact element={<ItemList />} />
      <Route path="/" exact element={<Dashboard />} />
    </Routes>
  );
};
export default Router;
