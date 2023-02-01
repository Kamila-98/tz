import React, { useState, useEffect } from "react";
import "./App.css";
import { DatePicker, Space } from "antd";
import moment from "moment";
import axios from "axios";

import { Input } from "antd";
import { Button } from "antd";
import TableUser from "./components/TableUser/TableUser";
import TableUserAll from "./components/tableAllUsers/TableAllUsers";

const { RangePicker } = DatePicker;

function App() {
  const [dataTime, setDataTime] = useState(null);
  const [dataUsers, setDataUsers] = useState([]);
  const [dataUserPost, setDataUserPost] = useState({
    name: "Kamila",
    password: "010899k",
    phoneNumber: "+996220061690",
  });
  const [allUsers, setAllUsers] = useState([]);

  console.log(allUsers);
  const getDataTime = () => {
    if (dataTime !== null) {
      console.log(dataTime[0], dataTime[1]);
      const BASE_URL = `http://176.126.164.43:85/rassrochka/api/v1/profiles/getDtoForMain/${dataTime[0]}/${dataTime[1]}`;
      axios.get(BASE_URL).then((res) => setDataUsers(res.data));
    } else {
      console.log("date now");
    }
  };

  const getDataUser = async () => {
    await axios
      .get("http://176.126.164.43:85/rassrochka/api/v1/user/getAllUsers")
      .then((res) => setAllUsers(res.data));
  };

  useEffect(() => {
    getDataTime();
  }, [dataTime]);

  const setPostData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://176.126.164.43:85/rassrochka/api/v1/user/saveUser",
        dataUserPost
      );

      if (res.status === 200) {
        alert("succes save user");
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="App">
      <Space direction="vertical" size={12}>
        <RangePicker
          showTime
          onChange={(e) => {
            setDataTime(
              e.map((value) => {
                return moment(value.$d).format("YYYY-MM-DDTHH:mm:ss");
              })
            );
          }}
        />
      </Space>

      <TableUser dataUsers={dataUsers} />

      <Input
        placeholder="Basic usage"
        value={dataUserPost.name}
        type="text"
        onChange={(e) => {
          setDataUserPost({ ...dataUserPost, name: e.target.value });
        }}
      />
      <Input
        placeholder="Basic usage"
        value={dataUserPost.password}
        type="password"
        onChange={(e) => {
          setDataUserPost({ ...dataUserPost, password: e.target.value });
        }}
      />
      <Input
        placeholder="Basic usage"
        value={dataUserPost.phoneNumber}
        type="number"
        onChange={(e) => {
          setDataUserPost({ ...dataUserPost, phoneNumber: e.target.value });
        }}
      />

      <Button onClick={setPostData}>save user</Button>

      <Button onClick={getDataUser}>get data all users</Button>

      <TableUserAll dataUsers={allUsers} />
    </div>
  );
}

export default App;
