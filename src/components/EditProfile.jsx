import React, { useState } from "react";
import Wrapper from "../assets/wrappers/EditProfileWrapper";
import FormRow from "./FormRow";
import { useDashboardContext } from "../pages/Dashboard";

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
        Edit Profile
      </button>

      <div className={showEditProfile ? "overlay show-overlay" : "overlay"}>
        <div className="hidden">
          <button
            type="button"
            className="btn btn-no"
            onClick={() => setShowEditProfile(false)}
          >
            Cancel
          </button>
          <h3 className="title">Edit Profile</h3>
          <button type="submit" className="btn btn-yes">
            Done
          </button>
        </div>
      </div>
      <form className={showEditProfile ? "dropdown show-dropdown" : "dropdown"}>
        <FormRow type="text" name="name" defaultValue={user.name} />
        <FormRow
          type="text"
          labelText="last name"
          name="lastName"
          defaultValue={user.lastName}
        />
        <FormRow
          type="text"
          name="description"
          defaultValue={user.description}
        />
        <div className="button-group">
          <button
            type="button"
            className="btn cancel-btn"
            onClick={() => setShowEditProfile(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn submit-btn">
            Done
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default EditProfile;
