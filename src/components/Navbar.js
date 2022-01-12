import React from "react";

function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-default bg-light">
        <a className="navbar-brand" href="#">
          Car
        </a>
        

        <div className="navbar-expand" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                list
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                create
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                update
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                delete
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
