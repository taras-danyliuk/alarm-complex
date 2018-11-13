import React, { Component } from 'react';


class Block extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props.block }
  }

  _onChange = (key, event) => {

    this.setState({ [key]: event.target.value });
  };

  _onSave = () => {
    console.log("save");
  };



  render() {
    const { version, IPAddress, IPServer, LowAddress, Netmask, PortServer, TimeScan, TopAddress } = this.state;

    return (
      <div className="block">
        <div className="block-row">
          <h3 className="block-row-label">Version:</h3>
          <h3 className="block-row-input">{version}</h3>
        </div>

        <div className="block-row">
          <p className="block-row-label">IPAddress</p>
          <input className="block-row-input" value={IPAddress} onChange={this._onChange.bind(this, "IPAddress")}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">IPServer</p>
          <input className="block-row-input" value={IPServer} onChange={this._onChange.bind(this, "IPServer")}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">LowAddress</p>
          <input className="block-row-input" value={LowAddress} onChange={this._onChange.bind(this, "LowAddress")}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">Netmask</p>
          <input className="block-row-input" value={Netmask} onChange={this._onChange.bind(this, "Netmask")}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">PortServer</p>
          <input className="block-row-input" value={PortServer} onChange={this._onChange.bind(this, "PortServer")}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">TimeScan</p>
          <input className="block-row-input" value={TimeScan} onChange={this._onChange.bind(this, "TimeScan")}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">TopAddress</p>
          <input className="block-row-input" value={TopAddress} onChange={this._onChange.bind(this, "TopAddress")}/>
        </div>

        <div className="button" onClick={this._onSave}>Save</div>
      </div>
    );
  }
}

export default Block;
