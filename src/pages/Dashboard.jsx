import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SmallSideBar, BigSideBar, Header } from "../components";
import Wrapper from "../assets/wrappers/DashboardWrapper";
import { privateAxios } from "../api/client";

const DashboardContext = createContext();

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    // try {
    //   await privateAxios.post("/auth/logout");
    //   setUser(null);
    // } catch (error) {
    //   console.error("Logout failed:", error);
    // }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("accessToken");
        // console.log("Fetching user with token:", token);
        const res = await privateAxios.get("/profiles/me");
        const profile = res.data.data.profile;
        // console.log("Fetched user:", profile);
        setUser({
          id: profile.id || "",
          username: profile.displayName || "",
          lastName: profile.username || "",
          description: profile.bio || "",
          gmail: `${profile.username}@gmail.com`,
          follower: profile.followerCount || 0,
        });
      } catch (error) {
        console.error(
          "Failed to fetch user:",
          error.response?.data || error.message
        );
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
        {loading ? (
          <p>Đang tải dữ liệu người dùng...</p>
        ) : !user?.id ? (
          <p>Không thể xác thực người dùng. Vui lòng kiểm tra token.</p>
        ) : (
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
        )}
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
