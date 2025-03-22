import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings, MdExplore, MdQueryStats } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6"

const links = [
  {
    text: "home",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "message",
    path: "message",
    icon: <FaRegMessage />,
  },
  {
    text: "explore",
    path: "explore",
    icon: <MdExplore />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
