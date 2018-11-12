import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.css';


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accardionOpened: false
    }
  }

  _toggleAccardion = () => {
    this.setState({ accardionOpened: !this.state.accardionOpened });
  };

  render() {
    const accardionClassNames = ["sidebar-accardion"];
    if (this.state.accardionOpened) accardionClassNames.push("opened");

    let modules = null;
    if (this.props.modules.length) {
      modules = this.props.modules.map(module => {
        return (
          <NavLink to={`/module/${module.ID}`} className="sidebar-element" key={ module.ID } activeClassName="selected">
            { module.Type } (ID: { module.ID })
          </NavLink>
        );
      });
    }

    return (
      <div className="sidebar">
        <NavLink to="/" exact className="sidebar-element" activeClassName="selected">Моніторинг</NavLink>
        <NavLink to="/block/" className="sidebar-element" activeClassName="selected">Блок</NavLink>

        <div className="sidebar-accardion-title" onClick={ this._toggleAccardion }>Модулі</div>
        <div className={accardionClassNames.join(" ")}>
          { modules }
        </div>

        <NavLink to="/statistic/" className="sidebar-element" activeClassName="selected">Статистика</NavLink>
      </div>
    );
  }
}

export default Sidebar;
