import React from "react";
import Wrapper from "../assets/wrappers/HeaderWrapper";
import { FaAlignLeft } from "react-icons/fa6";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/Dashboard";
import LogoutContainer from "./LogoutContainer";

const Header = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
        </div>
        <div className="btn-container">
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
