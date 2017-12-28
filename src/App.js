import React, { Component } from 'react';

import './App.css';
import RouterConfig  from './router/router';
import {Provider} from 'react-redux';
import store from './store/store';
class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <RouterConfig location={this.props.location}></RouterConfig>
      </Provider>
    );
  }
}

export default App;
