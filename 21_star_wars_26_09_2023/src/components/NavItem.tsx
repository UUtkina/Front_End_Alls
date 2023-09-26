import React, { FC } from "react";
import style from "./Alles.module.css";

const NavItem: FC<{ itemTitle: string }> = ({ itemTitle }) => {
    return <li className={`${style.li}, commonButton`}>{itemTitle}</li>;
};

export default NavItem;
