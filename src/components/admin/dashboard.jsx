import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./sideBar";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/posts" component={Posts} />
      <Route path="/admin/users" component={Users} />
    </div>
  );
};

export default Dashboard;
