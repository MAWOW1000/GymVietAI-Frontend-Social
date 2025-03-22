import React, { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { SmallSideBar, BigSideBar, NavBar } from "../components";
import Wrapper from "../assets/wrappers/DashboardWrapper";

const DashboardContext = createContext();

const Dashboard = () => {
  //temp
  const user = {
    name: "Thio",
    lastName: "Prando",
    description: "I am the bone of my sword",
  };
  const [showSidebar, setShowSidebar] = useState(false);

  //turn ON/OFF sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  //logout
  const logoutUser = async () => {
    return null;
  };

  return (
    <DashboardContext.Provider
      value={{ showSidebar, toggleSidebar, user, logoutUser }}
    >
      <Wrapper>
        <main className="dashboard">
          <BigSideBar />
          <SmallSideBar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
