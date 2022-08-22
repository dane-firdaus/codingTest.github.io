import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListItems, ListItemsEmpty } from "../../bodyComponent";
import { Modal, Navbar } from "../../component";
import { useLocation, useNavigate } from "react-router-dom";

import { Header, List } from "../../component";

const ItemList = () => {
  const data = useLocation();
  console.log(data.state);
  const navigate = useNavigate();
  const dataID = data.state;
  useEffect(() => {
    axios.get(`https://todo.api.devcode.gethired.id/activity-groups/${dataID}`).then((res) => {
      console.log(res);
      setListItems(res.data.todo_items);
      setTitle(res.data.title);
      console.log("judul", title);
    });
  }, []);
  const [listItems, setListItems] = useState([]);
  const [title, setTitle] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  if (listItems.length === 0) {
    return (
      <div style={page}>
        <Navbar />
        <div style={content}>
          <Header
            type="backHeader"
            text={title}
            onPress={() => {
              navigate("/", { replace: true });
            }}
            onPressButton={() => setIsCreate(true)}
          />
          <ListItemsEmpty />
        </div>

        <Modal active={isCreate} onCloses={() => setIsCreate(false)} />
      </div>
    );
  } else {
    return (
      <div style={page}>
        <Navbar />
        <div style={content}>
          <Header
            type="backFilterHeader"
            titles={title}
            onClick={() => {
              navigate("/", { replace: true });
            }}
          />
          {listItems.map((items) => {
            return <List itemName={items.title} />;
          })}
        </div>
      </div>
    );
  }
};
export default ItemList;
const page = {
  backgroundColor: "#E5E5E5",
  backgroundSize: "cover",
  minHeight: "100vh",
};

const content = {
  marginRight: 220,
  marginLeft: 220,
  marginTop: 43,
  paddingBottom: 20,
};
const dropdownwrapper = {
  marginLeft: 30,
};
