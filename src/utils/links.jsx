import React from "react";
import { MdExplore, MdPeopleAlt } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessage } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const links = [
  {
    text: "home",
    path: ".",
    icon: <GoHomeFill />,
  },
  {
    text: "search",
    path: "search",
    icon: <FaSearch />,
  },
  {
    text: "message",
    path: "message",
    icon: <BiSolidMessage />,
  },
  {
    text: "explore",
    path: "explore",
    icon: <MdExplore />,
  },
  {
    text: "notify",
    path: "notify",
    icon: <IoIosNotifications />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <MdPeopleAlt />,
  },
];

export default links;
