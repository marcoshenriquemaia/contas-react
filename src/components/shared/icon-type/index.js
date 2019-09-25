import React from "react";
import { FaHome, FaWallet, FaTimes, FaPlane, FaPlus, FaBackspace } from "react-icons/fa";

const DictonaryIcon = {
  error: () => <FaTimes />,
  home: (rest) => <FaHome {...rest}/>,
  wallet: (rest) => <FaWallet {...rest}/>,
  travel: (rest) => <FaPlane {...rest}/>,
  plus: (rest) => <FaPlus {...rest}/>,
  backspace: (rest) => <FaBackspace {...rest}/>
};

const IconType = ({ icon, ...rest }) =>
  icon && !!DictonaryIcon[icon]
    ? DictonaryIcon[icon](rest)
    : DictonaryIcon["error"]();

export default IconType;
