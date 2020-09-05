import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    withRouter,
    Switch,
    NavLink,
} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Main from './Main';
import Tutorial from "./Tutorial";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as serviceWorker from './serviceWorker';



const DropdownMenu = (props) => {
    const {location} = props;
    if (location.pathname === "/Eware") {return null}
        return (<nav className="dropdown">
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
                {/*<Save/>*/}
            </ul>
            <button className="dropbtn"><FontAwesomeIcon icon={faBars} /></button>
        </nav>)
};
const ShowDropdownMenu = withRouter(DropdownMenu);
const Load = () => <h1>Load previously played game </h1>;
const NotFound = () => <h1>404 Page not found</h1>;

const menuItems = [
    {
        link: "/Eware",
        name: "Main Page"
    },
    {
        link: "/About",
        name: "About Oware"
    },
    {
        link: "/Tutorial",
        name: "Tutorial"
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
    <BrowserRouter>
        <div className="mainContainer">
            <header>
                <ShowDropdownMenu/>
            </header>
            <Switch>
                <Route path="/Eware"><Main menuItems={menuItems}/></Route>
                <Route path="/About" component={About} />
                <Route path="/Tutorial" component={Tutorial} />
                <Route path="/play"><App menuItems={menuItems}/></Route>
                <Route path="/load" component={Load} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
