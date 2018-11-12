import React, { Component } from 'react';


class Module extends Component {
  render() {
    const { Type, ID, Firmware } = this.props.module;

    return (
      <div className="module">
        <div className="module-header">
          <h3 className="module-header-title">{Type} (ID: {ID}) | Firmware: {Firmware}</h3>
        </div>

        { this._renderTable() }
      </div>
    );
  }

  _renderTable() {
    const { Sensors } = this.props.module;

    if (Sensors.length === 0) return null;

    const keys = Object.keys(Sensors[0]);

    const header = keys.map(key => {
      return <div className="grid-cell" key={key}>{key}</div>
    });

    const content = [];
    Sensors.forEach(sensor => {
      keys.forEach(key => {
        content.push(<div className="grid-cell" key={`${sensor.ID}_${key}`}>{sensor[key].toString()}</div>)
      })
    });

    return (
      <div className="module-table">
        { header }
        { content }
      </div>
    )
  }
}

export default Module;
