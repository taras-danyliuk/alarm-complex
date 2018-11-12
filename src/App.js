import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Siderbar from "./sidebar";
import Home from "./scenes/home";
import Block from "./scenes/block";
import Module from "./scenes/module";

import './App.css';
import './modules/modules.css';
import config from "./config.json";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="header"></div>

          <div className="main">
            <Siderbar modules={config.Modules}/>

            <div className="content">
              <Route path="/" exact component={this._renderHome} />
              <Route path="/block/" component={this._renderBlock} />
              <Route path="/module/:id" component={this._renderModule} />
            </div>
          </div>
        </div>
      </Router>
    );
  }

  _renderHome() {
    return <Home modules={config.Modules}/>
  }

  _renderBlock() {
    const { Modules, ...block } = config;

    return <Block block={block}/>
  }

  _renderModule(props) {
    const targetId = props.match.params.id;
    let module = {};

    config.Modules.forEach(m => {
      if (m.ID === Number(targetId)) module = m;
    });

    return <Module module={module}/>
  }
}

export default App;
