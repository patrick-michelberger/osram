import React, { Component } from "react";
import { Text, ScrollView } from "react-native";

import { connect } from "react-redux";
import { fetchData } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    const { state, actions } = this.props;
    return (
        <Text>Osram Wiesn!</Text>
      );
  }
}

export default connect(state => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(App);
