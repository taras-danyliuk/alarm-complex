import React, { Component } from 'react';

import MTS from '../modules/mts';
import MPI from '../modules/mpi';
import KMKP from '../modules/kmkp';

import { TooltipProvider } from '../tooltipContext';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false,
      tooltipContent: []
    }
  }

  updateContent = (visible, content) => {
    this.setState({ tooltipOpen: visible, tooltipContent: content });
  };


  render() {
    let modules = null;
    if (this.props.modules.length) {
      modules = this.props.modules.map(module => {
        return (
          <div className="module-holder" key={ module.ID }>
            <h3 className="module-title">{module.Type} ({module.ID})</h3>

            { this._renderModule(module) }
          </div>
        );
      })
    }

    return (
      <div className="home">
        <TooltipProvider
          value={{
            isOpen: this.state.tooltipOpen,
            content: this.state.tooltipContent,
            updateContent: this.updateContent
          }}
        >
          { modules }

          { this._renderTooltip() }
        </TooltipProvider>
      </div>
    );
  }

  _renderModule(module) {
    switch (module.Type) {
      case 'MTS':
        return <MTS module={ module }/>;
      case 'MPI':
        return <MPI module={ module }/>;
      case 'KMKP':
        return <KMKP module={ module }/>;
      default:
        return <div>Oops, module { module.Type } not found</div>
    }
  }

  _renderTooltip() {
    let visibility = "hidden";
    if (this.state.tooltipOpen) visibility = "visible";

    const content = this.state.tooltipContent.map(el => {
      return <p key={el}>{el}</p>
    });

    return (
      <div className="tooltip" style={{ visibility }}>
        { content }
      </div>
    )
  }
}

export default Home;
