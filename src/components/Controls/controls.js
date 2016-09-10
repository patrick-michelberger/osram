import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';
import BottomButtons from '../BottomButtons/bottomButtons';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = { w: 50, h: 50, background: {
      top: '#eef2f3',
      bottom: '#8e9eab'
    }};
  }

  render() {
    return (<View>
      <View style={styles.bottomView}>
        <BottomButtons type={'love'} imageUrl={'../../../shared/assets/img/love_filled.png'}/>
        <BottomButtons type={'beer'} imageUrl={'../../../shared/assets/img/beer_filled.png'}/>
        <BottomButtons type={'food'} imageUrl={'../../../shared/assets/img/food_filled.png'}/>
      </View>
    </View>)}

}
