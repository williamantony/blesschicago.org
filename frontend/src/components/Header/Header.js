import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {

  render() {
    const { pathname } = this.props.location;

    return (
      <div className="Header Header--fixed">
        <div className="Header__bg" />
        <div className="wrapper">
          <div className="Header__bar">
            <div className="Header__logo">
              Bless <span className="chicago">Chicago</span>
            </div>
            <nav className="Header__nav">
              <ul className="Header__nav__list">
                <NavLink to="/">
                  <li className="Header__nav__item" data-selected={ pathname === '/' }>
                    Home
                  </li>
                </NavLink>
                <NavLink to="/schedule">
                  <li className="Header__nav__item" data-selected={ pathname === '/schedule' }>
                    Schedule
                  </li>
                </NavLink>
                <NavLink to="venue">
                  <li className="Header__nav__item" data-selected={ pathname === '/venue' }>
                    Venue
                  </li>
                </NavLink>
                <NavLink to="contact">
                  <li className="Header__nav__item" data-selected={ pathname === '/contact' }>
                    Contact
                  </li>
                </NavLink>
                <NavLink to="/about/convention">
                  <li className="Header__nav__item" data-selected={ pathname === '/about/convention' }>
                    About
                  </li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
