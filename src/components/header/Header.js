import './Header.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <div className="card app-header">
          <nav className="navbar navbar-expand-lg ml-auto w-100">
            {/* <NavLink className="navbar-brand" to="/">
              IQ-React
            </NavLink> */}
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button> */}
            <input type="text" className="form-control mr-2 w-100" placeholder="Search Text" />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/features">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
              </ul>
              <NavLink className="btn btn-primary" to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-outline-primary" to="/register">
                Register
              </NavLink>
            </div>
          </nav>
        </div>
    )
  }
}
