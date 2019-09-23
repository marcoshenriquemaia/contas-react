import React from "react";
import { FaHome, FaWallet, FaTimes, FaPlane, FaPlus } from "react-icons/fa";

const DictonaryIcon = {
  error: () => <FaTimes />,
  home: () => <FaHome />,
  wallet: () => <FaWallet />,
  travel: () => <FaPlane />,
  plus: () => <FaPlus />
};

const IconType = ({ icon }) =>
  icon && !!DictonaryIcon[icon]
    ? DictonaryIcon[icon]()
    : DictonaryIcon["error"]();

export default IconType;
