import React, { Component } from 'react';

import TSSensor from "../sensors/tsSensor";


class MTS extends Component {
  render() {
    const { Sensors, ID, Usage, State } = this.props.module;

    const classNames = ["module-block"];
    if (Usage && State) classNames.push("module-normal");
    else if (Usage && !State) classNames.push("module-error");

    let sensors = null;
    if (Sensors.length) {
      sensors = Sensors.map(sensor => {
        return <TSSensor key={ `mts${ID}sensor${sensor.ID}` } sensor={sensor} />
      })
    }

    return (
      <div className={classNames.join(" ")}>
        { sensors }
      </div>
    );
  }
}

export default MTS;
