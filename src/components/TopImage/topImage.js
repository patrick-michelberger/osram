import React, { Component } from 'react';
import {
  View,
  Image,
  LayoutAnimation
} from 'react-native';
import styles from './styles';

export default class TopImage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circularWrapper}>
          <Image source={this.props.conf.topIcon} style={styles.image} />
        </View>
      </View>
    )}

}
