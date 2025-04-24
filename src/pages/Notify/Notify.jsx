// src/pages/Notify/Notify.jsx
import React, { useState, useEffect } from "react";
import { Notify as NotifyComponent } from "../../components";
import Wrapper from "./NotifyWrapper";
import image from "../../assets/images/avatar-1.jpg";
import { privateAxios } from "../../api/client";

const Notify = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await privateAxios.get(
          "/notifications?page=1&limit=20&unreadOnly=false"
        );
        setNotifications(response.data.data.notifications || []);
      } catch (error) {
        console.error("Lỗi khi lấy thông báo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <Wrapper>
      <div className="Notify">
        {loading ? (
          <p>Đang tải...</p>
        ) : notifications.length === 0 ? (
          <p>Không có thông báo nào</p>
        ) : (
          notifications.map((notify) => (
            <NotifyComponent
              key={notify.id}
              notify={notify}
              defaultImage={image}
            />
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default Notify;
