import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

export default class MidText extends Component {
  constructor(props) {
      super(props);
      console.log(props);
  }

  render() {
    return (
      <View style={{flex: 2, backgroundColor: 'transparent'}}>
        <Text style={[styles.instructions, styles.titles]}>
          {this.props.title}
        </Text>
        <Text style={styles.instructions}>
          {this.props.text}
        </Text>
      </View>
    )}
}
