import React, { Component } from 'react';
import {
  Link,
} from "react-router-dom";
import searchImg from '../../images/search_icon.png';
import logoImg from '../../images/logo.png';
import Components from '../index';
import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowNavBar: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.setIsShowNavBar = this.setIsShowNavBar.bind(this);
  }

  setIsShowNavBar(isShowNavBar) {
    this.setState({
      isShowNavBar,
    })
  }

  toggleNavbar() {
    this.setState({
      isShowNavBar: !this.state.isShowNavBar,
    })
  }

  renderMenu() {
    return (
      <ul className="navbar-nav">
        {Object.entries(Components).map(compoment => (<li onClick={() => this.setIsShowNavBar(false)} className="nav-item">
          <Link className="nav-link" to={compoment[1].path}>{compoment[1].name}</Link>
        </li>))}
      </ul>
    );
  }
  
  render() {
    return (
      <header className="header">
        <div className="header_top_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="full">
                  <div className="logo">
                    <Link to='/'>VƯỢT LINK</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 site_information">
                <div className="full">
                  <div className="main_menu">
                    <nav className="navbar navbar-inverse navbar-toggleable-md">
                      <button onClick={this.toggleNavbar} className={`navbar-toggler ${this.state.isShowNavBar ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#cloapediamenu" aria-controls="cloapediamenu" aria-expanded={this.state.isShowNavBar} aria-label="Toggle navigation">
                        <span className="float-left">Menu</span>
                        <span className="float-right"><i className="fa fa-bars"></i> <i className="fa fa-close"></i></span>
                      </button>
                      <div className={`collapse navbar-collapse justify-content-md-center ${this.state.isShowNavBar ? 'collapse show' : ''}`} id="cloapediamenu" aria-expanded={!this.state.isShowNavBar}>
                        {this.renderMenu()}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
