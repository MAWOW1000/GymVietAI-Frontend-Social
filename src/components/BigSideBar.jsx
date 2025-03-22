import React from "react";
import Wrapper from "../assets/wrappers/BigSideBarWrapper";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/Dashboard";
import NavLinks from "./NavLinks";

const BigSideBar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
