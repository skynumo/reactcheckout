import './NavSidebar.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import navItemsJson from '../../_assets/dummy-json/sidebar-nav-items.json';

const NavListItem = (props) => {
  const { item } = props;
  return <li className={["nav-item", item.classes].join(" ")}>
            <NavLink className="nav-link" to={item.link}>
              <span className="nav-icon">
                { item.icon === 'home' && <FontAwesomeIcon icon={faHome} /> }
                { item.icon === 'dollar' && <FontAwesomeIcon icon={faDollarSign} /> }
                { item.icon === 'star' && <FontAwesomeIcon icon={faStar} /> }
              </span> 
              {item.name}
            </NavLink>
          </li>
}

const NavListItemDropdown = (props) => {
  const { item } = props;
  return <li className={["nav-item", item.classes].join(" ")}>
            <NavDropdown title={item.name} id="basic-nav-dropdown">
              {/* TODO */}
              <span className="nav-icon">
                { item.icon === 'home' && <FontAwesomeIcon icon={faHome} /> }
                { item.icon === 'dollar' && <FontAwesomeIcon icon={faDollarSign} /> }
                { item.icon === 'star' && <FontAwesomeIcon icon={faStar} /> }
              </span> 
              {
              item.items.map((ditem, i) => 
                <NavListItem item={ditem} />
              )
              }
            </NavDropdown>
          </li>
}

export default class NavSidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: []
    }
  }

  componentDidMount() {
    this.setState({
      navItems: navItemsJson
    })
  }

  render() {
    const { navItems } = this.state;
    console.log(navItems);
    return (
        <div className="card app-sidebar">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              IQ-React
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                { navItems ? 
                  navItems.map((item, i) =>  
                    (item.type === 'link' && !item.hide && <NavListItem item={item} />)
                    || 
                    (item.type === 'dropdown' && !item.hide && <NavListItemDropdown item={item} />)
                  )
                  : 
                  <li>Loading</li>
                }
              </ul>
              {/* <NavLink className="btn btn-outline-info" to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-outline-info" to="/register">
                Register
              </NavLink> */}
            </div>
          </nav>
        </div>
    )
  }
}
