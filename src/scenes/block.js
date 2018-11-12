import React, { Component } from 'react';


class Block extends Component {
  render() {
    const { version, IPAddress, IPServer, LowAdress, Netmask, PortServer, TimeScan, TopAddress } = this.props.block;

    return (
      <div className="block">
        <div className="block-row">
          <h3 className="block-row-label">Version:</h3>
          <h3 className="block-row-input">{version}</h3>
        </div>

        <div className="block-row">
          <p className="block-row-label">IPAddress</p>
          <input className="block-row-input" value={IPAddress}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">IPServer</p>
          <input className="block-row-input" value={IPServer}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">LowAdress</p>
          <input className="block-row-input" value={LowAdress}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">Netmask</p>
          <input className="block-row-input" value={Netmask}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">PortServer</p>
          <input className="block-row-input" value={PortServer}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">TimeScan</p>
          <input className="block-row-input" value={TimeScan}/>
        </div>

        <div className="block-row">
          <p className="block-row-label">TopAddress</p>
          <input className="block-row-input" value={TopAddress}/>
        </div>
      </div>
    );
  }
}

export default Block;
