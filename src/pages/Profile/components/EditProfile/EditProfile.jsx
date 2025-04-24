import React, { useState, useEffect } from "react";
import Wrapper from "./EditProfileWrapper";
import FormRow from "../FormRow";
import { privateAxios } from "../../../../api/client";
import { useDashboardContext } from "../../../Dashboard";

const EditProfile = () => {
  const { user, setUser } = useDashboardContext();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    lastName: "",
    description: "",
  });

  useEffect(() => {
    if (showEditProfile && user) {
      setFormData({
        username: user.username || "",
        lastName: user.lastName || "",
        description: user.description || "",
      });
    }
  }, [showEditProfile, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    // console.log("data:", formData);

    try {
      const payload = {
        displayName: formData.username,
        username: formData.lastName, //tên đăng nhập
        bio: formData.description,
      };
      const response = await privateAxios.put("/profiles", payload);
      console.log("API response:", response.data);

      if (response.data?.data?.profile) {
        const updatedUser = response.data.data.profile;
        setUser((prev) => ({
          ...prev,
          username: updatedUser.displayName || prev.username,
          lastName: updatedUser.username || prev.lastName,
          description: updatedUser.bio || prev.description,
        }));
        alert("Cập nhật thành công!");
        setShowEditProfile(false);
      } else {
        alert("Không có dữ liệu người dùng mới.");
      }
    } catch (error) {
      console.error(
        "Lỗi khi cập nhật profile:",
        error.response || error.message
      );
      alert("Cập nhật thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="btn edit-profile"
        onClick={() => setShowEditProfile(true)}
      >
        Sửa Thông Tin
      </button>

      <div className={showEditProfile ? "overlay show-overlay" : "overlay"}>
        <div className="hidden">
          <button
            type="button"
            className="btn btn-no"
            onClick={() => setShowEditProfile(false)}
          >
            Hủy
          </button>
          <button type="button" className="btn btn-yes" onClick={handleSubmit}>
            Xong
          </button>
        </div>
      </div>

      <form
        className={showEditProfile ? "dropdown show-dropdown" : "dropdown"}
        onSubmit={handleSubmit}
      >
        <FormRow
          type="text"
          name="username"
          labelText="Tên"
          value={formData.username}
          onChange={handleChange}
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Họ"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FormRow
          type="text"
          name="description"
          labelText="Mô tả"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="button-group">
          <button
            type="button"
            className="btn cancel-btn"
            onClick={() => setShowEditProfile(false)}
          >
            Hủy
          </button>
          <button type="submit" className="btn submit-btn">
            Xong
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default EditProfile;
