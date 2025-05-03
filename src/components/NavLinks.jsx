import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/Dashboard";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, unreadCount } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={toggleSidebar ? null : isBigSidebar}
            end
          >
            <span className="icon">
              {icon}
              {text === "notify" && unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </span>
            {/* {text} */}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
