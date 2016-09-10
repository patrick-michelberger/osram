import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import MainView from '../components/MainView/mainView';

import { connect } from "react-redux";
import { fetchData } from "../actions";
import { listenToDevices, scanDevices } from "../actions/bluetooth";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.handleScan();
  }
  render() {
    const { state, actions } = this.props;
      return (<MainView />);
  }

  handleScan() {
    this.props.dispatch(listenToDevices());
    this.props.dispatch(scanDevices());
  }
}

export default connect(state => ({
  discoveredDevice: state.bluetooth.discoveredDevice
}))(App);
