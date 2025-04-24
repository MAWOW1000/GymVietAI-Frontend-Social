import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SmallSideBar, BigSideBar, Header } from "../components";
import Wrapper from "../assets/wrappers/DashboardWrapper";
import { privateAxios } from "../api/client";

const DashboardContext = createContext();

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({
    username: "",
    lastName: "",
    description: "",
    gmail: "",
    follower: "",
  });
  const [loading, setLoading] = useState(true);

  //turn ON/OFF sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  //logout
  const logoutUser = async () => {
    return null;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await privateAxios.get("/profiles/me");
        const profile = res.data.data.profile;

        setUser({
          id: profile.id || "",
          username: profile.displayName || "",
          lastName: profile.username || "", //tên đăng nhập
          description: profile.bio || "",
          gmail: `${profile.username}@gmail.com`,
          follower: profile.followerCount,
        });
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
        user,
        setUser,
        logoutUser,
        loading,
      }}
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
