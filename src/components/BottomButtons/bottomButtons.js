import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';

export default class BottomButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { w: 50, h: 50, background: {
      top: '#eef2f3',
      bottom: '#8e9eab'
    }};
    this._onPress = this._onPress.bind(this);
  }

  _onPress(type) {
    switch (type) {
      case 'beer':
        this.setState({...this.state, background: {
          top: '#EDDE5D',
          bottom: '#F09819'
        },
        topIcon: require('../../../shared/assets/img/beer.png')});
        break;
      case 'love':
          this.setState({...this.state, background: {
            top: '#FFB88C',
            bottom: '#DE6262'
          }, topIcon: require('../../../shared/assets/img/love.png')});
        break;
      case 'food':
          this.setState({...this.state, background: {
            top: '#b29f94',
            bottom: '#603813'
          }, topIcon: require('../../../shared/assets/img/food.png')});
        break;
      default:
        this.setState({...this.state, background: {
        top: '#eef2f3',
        bottom: '#8e9eab'
      }, topIcon: require('../../../shared/assets/img/osram.png')});
    }
  }

  render() {
    return (<View>
      <View style={styles.bottomView}>
        <View style={[{backgroundColor: this.state.background.bottom},styles.wrapper]}>
          <TouchableOpacity onPress={this._onPress.bind(this, 'love')}>
            <View style={styles.innerWrapper}>
              <Image source={require('../../../shared/assets/img/love_filled.png')} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[{backgroundColor: this.state.background.bottom},styles.wrapper]}>
          <TouchableOpacity onPress={this._onPress.bind(this, 'beer')}>
            <View style={styles.innerWrapper}>
              <Image source={require('../../../shared/assets/img/beer_filled.png')} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[{backgroundColor: this.state.background.bottom},styles.wrapper]}>
          <TouchableOpacity onPress={this._onPress.bind(this, 'food')}>
            <View style={styles.innerWrapper}>
              <Image source={require('../../../shared/assets/img/food_filled.png')} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
    </View>
    <View style={styles.bottomView}>
      <View style={[{backgroundColor: this.state.background.bottom},styles.wrapper]}>
        <TouchableOpacity onPress={this._onPress.bind(this, 'love')}>
          <View style={styles.innerWrapper}>
            <Image source={require('../../../shared/assets/img/love_filled.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[{backgroundColor: this.state.background.bottom},styles.wrapper]}>
        <TouchableOpacity onPress={this._onPress.bind(this, 'beer')}>
          <View style={styles.innerWrapper}>
            <Image source={require('../../../shared/assets/img/beer_filled.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[{backgroundColor: this.state.background.bottom},styles.wrapper]}>
        <TouchableOpacity onPress={this._onPress.bind(this, 'food')}>
          <View style={styles.innerWrapper}>
            <Image source={require('../../../shared/assets/img/food_filled.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
  </View>
</View>
    )}

}
