import React, { useState } from "react";
import Wrapper from "./EditProfileWrapper";
import FormRow from "../FormRow";
import { useDashboardContext } from "../../../Dashboard";

const EditProfile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const { user } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn edit-profile"
        onClick={() => {
          setShowEditProfile(!showEditProfile);
        }}
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
          <h3 className="title">Edit Profile</h3>
          <button type="submit" className="btn btn-yes">
            Xong
          </button>
        </div>
      </div>
      <form className={showEditProfile ? "dropdown show-dropdown" : "dropdown"}>
        <FormRow type="text" name="Tên" defaultValue={user.name} />
        <FormRow
          type="text"
          labelText="Họ"
          name="lastName"
          defaultValue={user.lastName}
        />
        <FormRow
          type="text"
          labelText="mô tả"
          name="description"
          defaultValue={user.description}
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
