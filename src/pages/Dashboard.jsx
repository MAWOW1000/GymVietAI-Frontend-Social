import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SmallSideBar, BigSideBar, Header } from "../components";
import Wrapper from "../assets/wrappers/DashboardWrapper";
import { privateAxios } from "../api/client";
import { initSocket } from "../api/socket";

const DashboardContext = createContext();

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {};

  const fetchUnreadCount = async () => {
    try {
      const res = await privateAxios.get("/notifications/unread-count");
      setUnreadCount(res.data.data.unreadCount || 0);
    } catch (error) {
      console.error("Lỗi khi lấy số lượng thông báo chưa đọc:", error);
    }
  };

  const markAsRead = async (ids) => {
    try {
      await privateAxios.patch("/notifications/read", { ids });
      setNotifications((prev) =>
        prev.map((n) => (ids.includes(n.id) ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prevCount) => Math.max(0, prevCount - ids.length));
    } catch (error) {
      console.error("Lỗi khi đánh dấu thông báo là đã đọc:", error);
    }
  };

  useEffect(() => {
    const savedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(savedNotifications);
    setUnreadCount(savedNotifications.filter((n) => !n.isRead).length);
    fetchUnreadCount();
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
    setUnreadCount(notifications.filter((n) => !n.isRead).length);
  }, [notifications]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await privateAxios.get("/profiles/me");
        const profile = res.data.data.profile;
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

  useEffect(() => {
    if (!user?.id) return;

    const socket = initSocket();
    if (!socket) {
      console.error("Failed to initialize WebSocket");
      return;
    }

    socket.on("connect", () => {
      console.log("WebSocket connected for notifications");
      socket.emit("join", { userId: user.id });
      console.log(`Joined room user:${user.id}`);
    });

    socket.on("notification", (newNotification) => {
      console.log("Received general notification:", newNotification);
      if (newNotification.recipientId === user.id) {
        setNotifications((prev) => {
          if (prev.some((notif) => notif.id === newNotification.id)) {
            return prev;
          }
          return [newNotification, ...prev];
        });
      } else {
        console.log("General notification ignored: wrong recipient");
      }
    });

    socket.on("new_notification", (realtimeNotification) => {
      console.log("Received real-time notification:", realtimeNotification);
      const newNotification = {
        id: Date.now().toString(),
        recipientId: user.id,
        senderId: realtimeNotification.data?.profileId || null,
        type: realtimeNotification.type,
        entityType:
          realtimeNotification.type === "FOLLOW" ||
          realtimeNotification.type === "FOLLOW_REQUEST"
            ? "PROFILE"
            : realtimeNotification.type === "LIKE"
            ? "POST"
            : "COMMENT",
        entityId:
          realtimeNotification.data?.postId ||
          realtimeNotification.data?.commentId ||
          realtimeNotification.data?.profileId ||
          null,
        message: realtimeNotification.message,
        createdAt: new Date().toISOString(),
        isRead: false,
        sender: {
          username:
            realtimeNotification.message.split("@")[1]?.split(" ")[0] ||
            "Unknown",
        },
        metadata: realtimeNotification.data,
      };

      setNotifications((prev) => {
        if (prev.some((notif) => notif.id === newNotification.id)) {
          return prev;
        }
        return [newNotification, ...prev];
      });
      setUnreadCount((prevCount) => prevCount + 1);
    });

    socket.on("connect_error", (error) => {
      console.error("WebSocket connect error:", error.message);
    });

    return () => {
      socket.off("notification");
      socket.off("new_notification");
      socket.off("connect_error");
      socket.off("connect");
    };
  }, [user?.id]);

  const markAllAsRead = async () => {
    try {
      const idsToMark = notifications.filter((n) => !n.isRead).map((n) => n.id);
      if (idsToMark.length > 0) {
        await privateAxios.patch("/notifications/read", { ids: idsToMark });
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
        setUnreadCount(0);
      }
    } catch (error) {
      console.error("Lỗi khi đánh dấu tất cả thông báo là đã đọc:", error);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
        user,
        setUser,
        notifications,
        setNotifications,
        unreadCount,
        markAllAsRead,
        markAsRead,
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
