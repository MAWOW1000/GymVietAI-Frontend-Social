import { useState, useEffect } from "react";
import { Notify as NotifyComponent } from "../../components";
import Wrapper from "./NotifyWrapper";
import image from "../../assets/images/avatar-1.jpg";
import { useDashboardContext } from "../Dashboard";
import { privateAxios } from "../../api/client";

const Notify = () => {
  const { user, notifications, setNotifications, markAsRead } =
    useDashboardContext();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [hasFetchedInitial, setHasFetchedInitial] = useState(false);

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
      const unreadIdsOnPage = fetchedNotifications
        .filter((n) => !n.isRead)
        .map((n) => n.id);
      if (unreadIdsOnPage.length > 0 && (page === 1 || hasFetchedInitial)) {
        await markAsRead(unreadIdsOnPage);
        console.log(
          "Đánh dấu đã đọc các thông báo (page:",
          page,
          "):",
          unreadIdsOnPage
        );
      }
      setHasFetchedInitial(true);
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
      setPage(1);
      setNotifications([]);
      setHasFetchedInitial(false);
      fetchNotifications();
    }
  }, [user?.id]);

  useEffect(() => {
    if (user?.id && page > 1) {
      fetchNotifications();
    }
  }, [page, user?.id]);

  return (
    <Wrapper>
      <div className="Notify">
        {notifications.length === 0 ? (
          <p className="no-notifications">Chưa có thông báo nào</p>
        ) : (
          notifications.map((notify) => (
            <NotifyComponent
              key={notify.id}
              notify={notify}
              defaultImage={image}
            />
          ))
        )}
        {loading && <p className="loading">Đang tải thông báo...</p>}
        {notifications.length >= page * limit && (
          <button
            className="load-more"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Đang tải..." : "Tải thêm thông báo"}
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Notify;
