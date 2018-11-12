import React, { Component } from 'react';

import MTS from '../modules/mts';
import MPI from '../modules/mpi';
import KMKP from '../modules/kmkp';


class Home extends Component {
  render() {
    let modules = null;
    if (this.props.modules.length) {
      modules = this.props.modules.map(module => {
        return (
          <div className="module-holder" key={ module.ID }>
            <h3 className="module-title">{module.Type}</h3>

            { this._renderModule(module) }
          </div>
        );
      })
    }

    return (
      <div className="home">
        { modules }
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
}

export default Home;
