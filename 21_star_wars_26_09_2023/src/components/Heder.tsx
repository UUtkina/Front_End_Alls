import React from "react";
import Navigation from "./Navigation";
import style from "./Alles.module.css";

const Heder = () => {
    return (
        <header className={style.head}>
            <Navigation></Navigation>
            <h1 className={style.h1}>Luke Skywalker</h1>
        </header>
    );
};

export default Heder;
