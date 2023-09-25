import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from './Alls.module.css'

const Layout = () => {
    return(
    <>

        <nav>
            <ul className={style.ul}>
                <li>
                    <Link to='/'> User</Link>
                </li>
                <li>
                    <Link to='/blog'>Blogs from nav</Link>
                </li>
                <li>
                <Link to='/coment'> Coment from nav</Link>
                </li>
                <li>
                <Link to='/todo'>ToDo from nav</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>

    </>);
};

export default Layout;
