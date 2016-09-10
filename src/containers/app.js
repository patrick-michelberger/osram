import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import MainView from '../components/MainView/mainView';

import { connect } from "react-redux";
import { fetchData } from "../actions";
import { drinkBeer } from "../actions/state";
import { listenToDevices, scanDevices } from "../actions/bluetooth";

class App extends Component {
  constructor(props) {
    super(props);
    this.drinkBeer = drinkBeer;
  }
  componentDidMount() {
    this.props.dispatch(fetchData());
    this.handleScan();
  }
  render() {
    const { state, actions } = this.props;
      return (<MainView />);
  }
  handleDrinkBeer() {
    console.log("handleDrinkBeer: ", this.state);
    if (this.state.connectedDevice) {
      drinkBeer(this.state.connectedDevice);
    }
  }
  handleScan() {
    this.props.dispatch(listenToDevices());
    this.props.dispatch(scanDevices());
  }
}

export default connect(state => ({
  isFetching: state.data.isFetching,
  connectedDevice: state.bluetooth.connectedDevice
}))(App);
