import { useState, useEffect } from "react";
import { Notify as NotifyComponent } from "../../components";
import Wrapper from "./NotifyWrapper";
import image from "../../assets/images/avatar-1.jpg";
import { useDashboardContext } from "../Dashboard";
import { initSocket } from "../../api/socket";
import { privateAxios } from "../../api/client";

const Notify = () => {
  const { user } = useDashboardContext();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    if (!user?.id) {
      console.log("User ID not available, skipping WebSocket");
      return;
    }

    const socket = initSocket();
    if (!socket) {
      console.error("Failed to initialize WebSocket");
      return;
    }

    socket.on("connect_error", (error) => {
      console.error("WebSocket connect error:", error.message);
      if (error.message.includes("Invalid token")) {
        console.log("Invalid token, please check token with backend");
      }
    });

    socket.on("connect", () => {
      console.log("WebSocket connected for notifications");
      socket.emit("join", { userId: user.id });
      console.log(`Joined room user:${user.id}`);
    });

    socket.on("notification", (newNotification) => {
      console.log("New notification:", newNotification);
      setNotifications((prev) => {
        if (prev.some((notif) => notif.id === newNotification.id)) {
          return prev;
        }
        return [newNotification, ...prev];
      });
    });

    return () => {
      socket.off("notification");
      socket.off("connect_error");
      socket.off("connect");
    };
  }, [user?.id]);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await privateAxios.get(
        `/notifications?page=${page}&limit=${limit}&unreadOnly=false`
      );
      console.log("Notifications response:", response.data);
      const fetchedNotifications = response.data.data.notifications || [];

      setNotifications((prev) => {
        const newNotifications = fetchedNotifications.filter(
          (newNotif) => !prev.some((notif) => notif.id === newNotif.id)
        );
        return [...prev, ...newNotifications];
      });
    } catch (error) {
      console.error(
        "Lỗi khi lấy thông báo:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (user?.id) {
      fetchNotifications();
    }
  }, [page, user?.id]);

  return (
    <Wrapper>
      <div className="Notify">
        {notifications.map((notify) => (
          <NotifyComponent
            key={notify.id}
            notify={notify}
            defaultImage={image}
          />
        ))}
        {notifications.length >= page * limit && (
          <button onClick={handleLoadMore} disabled={loading}>
            Tải thêm thông báo
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Notify;
