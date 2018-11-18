import React, { Component } from 'react';

import { TooltipConsumer } from "../tooltipContext";


class Sensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false,
    };

    this.timeoutId = null;
  }

  _onClick = () => {
    if (this.props.sensor.Type === "PI") {
      this.setState({ processing: true });

      setTimeout(() => this.setState({ processing: false }), 1000);
    }
  };

  _onMouseEnter = () => {
    this.timeoutId = setTimeout(() => {
      this.props.updateContent(true, [this.props.sensor.Name, this.props.sensor.Location]);
    }, 1000)
  };

  _onMouseLeave = () => {
    clearTimeout(this.timeoutId);

    if (this.props.tooltipOpen) this.props.updateContent(false, ["test", "another"]);
  };


  render() {
    const { ID, Usage, State, Name } = this.props.sensor;

    const sensorClassNames = ["module-sensor"];
    if (Usage && State) sensorClassNames.push("module-sensor-normal");
    else if (Usage && !State) sensorClassNames.push("module-sensor-error");

    let processing = null;
    if (this.state.processing) {
      processing = (<div className="module-sensor-processing">Wait...</div>)
    }

    return (
      <div
        className={sensorClassNames.join(" ")}
        onClick={this._onClick}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        { processing }

        <p className="module-sensor-id">{ID}</p>
        <p className="module-sensor-info">{Name}</p>
      </div>
    );
  }
}

const SensorWithContext = (props) => {
  return (
    <TooltipConsumer>
      {({updateContent, isOpen}) => (
        <Sensor {...props} updateContent={updateContent} tooltipOpen={isOpen}/>
      )}
    </TooltipConsumer>
  );
};

export default SensorWithContext;
