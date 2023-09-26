import React from "react";
import { navItem } from "./utils";
import NavItem from "./NavItem";
import style from "./Alles.module.css";

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <ul>
                {navItem.map((navItem, index) => (
                    <NavItem itemTitle={navItem} key={index} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
