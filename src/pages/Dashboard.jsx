import React, { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { SmallSideBar, BigSideBar, Header } from "../components";
import Wrapper from "../assets/wrappers/DashboardWrapper";

const DashboardContext = createContext();

const Dashboard = () => {
  //temp
  const user = {
    name: "Thio",
    lastName: "Prando",
    description: "I am the bone of my sword",
    gmail: "Standopawa@gmail.com",
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
            <Header />
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
