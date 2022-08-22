import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DashboardList } from "../../bodyComponent";
import { Button, Carding, Header, Navbar } from "../../component";
import dateFormat, { masks } from "dateformat";

const Dashboard = () => {
  useEffect(() => {
    axios.get("https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io").then((res) => {
      console.log(res.data.data);
      const datas = res.data.data;
      setData(res.data.data);
    });
  }, []);
  const [data, setData] = useState([]);
  const filterData = dateFormat(data.created_at, "dd,mmmm,yyyy");
  console.log(filterData, "berhasil");
  return (
    <div style={page}>
      <Navbar />
      <div style={wrapper}>
        <Header />
        <div style={listwrapper}>
          {data.map((item) => {
            return (
              <Link to={`/details/${item.id}`} state={item.id} style={{ textDecoration: "none", color: "#111111" }}>
                <DashboardList key={item.id} title={item.title} time={filterData} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

const page = {
  backgroundColor: "#E5E5E5",
  minHeight: "100vh",
};
const wrapper = {
  marginTop: 43,
  marginLeft: 250,
  marginRight: 249,
  paddingBottom: 20,
};

const listwrapper = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "start",
};
