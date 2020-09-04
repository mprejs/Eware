import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const Main = ({menuItems}) => {
    const menu = [...menuItems];
    menu.splice(0, 1);
    return (
        <>
            <h1
            className="mainTitle"
            >
                Welcome to Eware - digital version of Oware boardgame!
            </h1>
            <nav
                className="btnContainer"
                >
                <ul className="mainMenu">
                    {menu.map(item => (
                        <li key={item.link}>
                            <NavLink
                                exact={item.link === "/"}
                                to={item.link}
                                className="menu-link"
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
};

export default Main;