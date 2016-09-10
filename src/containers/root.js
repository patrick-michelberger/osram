import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
import App from "../containers/app";

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;