import React, { Component } from 'react';


class Module extends Component {
  constructor(props) {
    super(props);

    const sensorUsage = {};
    props.module.Sensors.forEach(sensor => {
      sensorUsage[sensor.ID] = sensor.Usage;
    });

    this.state = { sensorUsage };
  }

  _onChange(id) {
    const sensorUsage = Object.assign({}, this.state.sensorUsage);
    sensorUsage[id] = !sensorUsage[id];
    this.setState({ sensorUsage });
  }


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

    const keys = Object.keys(Sensors[0]).filter(k => !["Current", "State"].includes(k));
    keys.push("Update");

    const header = keys.map(key => {
      return <div className="grid-cell" key={key}>{key}</div>
    });

    const content = [];
    Sensors.forEach(sensor => {
      keys.forEach(key => {
        let cell = null;

        if (key === "Update") {
          cell = <div key={`${sensor.ID}_${key}`} className="grid-cell"><div className="grid-cell-save">Save</div></div>;
        }
        else if (typeof sensor[key] === "boolean") {
          cell = this._renderCheckbox(sensor, key);
        }
        else {
          cell = <div className="grid-cell" key={`${sensor.ID}_${key}`}>{sensor[key].toString()}</div>;
        }
        content.push(cell)
      });
    });

    return (
      <div className="module-table">
        { header }
        { content }
      </div>
    )
  }

  _renderCheckbox(sensor, key) {
    return (
      <div className="grid-cell" key={`${sensor.ID}_${key}`}>
        <input
          className="grid-cell-checkbox"
          type="checkbox"
          checked={this.state.sensorUsage[sensor.ID]}
          onChange={this._onChange.bind(this, sensor.ID)}
        />
      </div>
    )
  }
}

export default Module;
