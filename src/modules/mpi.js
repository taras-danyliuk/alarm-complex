import React, { Component } from 'react';

import TSSensor from "../sensors/tsSensor";
import PISensor from "../sensors/piSensor";
import TISensor from "../sensors/tiSensor";
import TUSensor from "../sensors/tuSensor";

class MPI extends Component {
  render() {
    const { Sensors, ID, Usage, State } = this.props.module;

    const classNames = ["module-block"];
    if (Usage && State) classNames.push("module-normal");
    else if (Usage && !State) classNames.push("module-error");

    let sensors = null;
    if (Sensors.length) {
      sensors = Sensors.map(sensor => {
        return this._renderSensor(sensor, `mpi${ID}sensor${sensor.ID}`);
      })
    }

    return (
      <div className={classNames.join(" ")}>
        { sensors }
      </div>
    );
  }

  _renderSensor(sensor, key) {
    switch (sensor.Type) {
      case 'TS':
        return <TSSensor key={ key } sensor={ sensor }/>;
      case 'PI':
        return <PISensor key={ key } sensor={ sensor }/>;
      case 'TI':
        return <TISensor key={ key } sensor={ sensor }/>;
      case 'TU':
        return <TUSensor key={ key } sensor={ sensor }/>;
      default:
        return <div key={ key }>Oops, sensor { sensor.Type } not found</div>
    }
  }
}

export default MPI;
