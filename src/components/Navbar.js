import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";
import List from "./List";

function Navbar() {
  return (
    <div className="navigation">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-default bg-light">
        <Link className="navbar-brand" to="/">
          Car
        </Link>
        

        <div className="navbar-expand" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/list'>
                list
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                create
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
          <Route exact path="/">
            <Create />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Navbar;
