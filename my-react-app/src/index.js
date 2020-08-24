import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import * as serviceWorker from './serviceWorker';

const Main = () => <h1>Hello</h1>;
const Load = () => <h1>Load previously played game </h1>;
const NotFound = () => <h1>404 Page not found</h1>;

const menuItems = [
    {
        link: "/",
        name: "Main Page"
    },
    {
        link: "/About",
        name: "About Oware"
    },
    {
        link: "/play",
        name: "New Game"
    },
    {
        link: "/load",
        name: "Load Game"
    }
];

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <>
            <header>
                <nav className="dropdown">
                    <ul className="dropdown-content">
                        {menuItems.map(item => (
                            <li key={item.link}>
                                <NavLink
                                    exact={item.link === "/"}
                                    to={item.link}
                                    className="menu-link"
                                    activeClassName="menu-link-active"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <button className="dropbtn">Dropdown</button>
                </nav>
            </header>
            <Switch>
                <Route exact path="/#" component={Main} />
                <Route path="/About" component={About} />
                <Route path="/play" component={App} />
                <Route path="/load" component={Load} />
                {/*<Route component={NotFound} />*/}
            </Switch>
        </>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
