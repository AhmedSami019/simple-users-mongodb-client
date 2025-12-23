import React from "react";
import { Outlet } from "react-router";
import Users from "./Users";
const usersPromise = fetch("http://localhost:3002/users").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      this is home
      <Users usersPromise={usersPromise}></Users>
    </div>
  );
};

export default Home;
