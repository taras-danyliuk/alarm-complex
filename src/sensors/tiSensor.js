import React, { Component } from 'react';


class TISensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    }
  }

  _toggleShowTooltip = () => {
    this.setState({ showTooltip: !this.state.showTooltip });
  };


  render() {
    const { ID, Normal, Name, Usage, State, Location } = this.props.sensor;

    const sensorClassNames = ["module-sensor"];
    if (Usage && State) sensorClassNames.push("module-sensor-normal");
    else if (Usage && !State) sensorClassNames.push("module-sensor-error");

    const tooltipClassNames = ["tooltip"];
    if (this.state.showTooltip) tooltipClassNames.push("visible");


    return (
      <div className={sensorClassNames.join(" ")} onClick={this._toggleShowTooltip}>
        <p className="module-sensor-id">{ID}</p>
        <p className="module-sensor-info">{Normal}</p>

        <div className={tooltipClassNames.join(" ")}>
          <div className="tooltip-content">
            <p className="tooltip-row">{Name} - {Normal}</p>
            <p className="tooltip-row">{Location}</p>
          </div>

          <div className="tooltip-arrow"/>
        </div>
      </div>
    );
  }
}

export default TISensor;
