import React from "react";

import { MdExplore, MdPeopleAlt } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessage } from "react-icons/bi";

const links = [
  {
    text: "home",
    path: ".",
    icon: <GoHomeFill />,
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
    text: "profile",
    path: "profile",
    icon: <MdPeopleAlt />,
  },
];

export default links;
