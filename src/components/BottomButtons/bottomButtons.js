import React, { Component } from 'react';
import C from '../../constants';
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
    this._onPress = this._onPress.bind(this);
  }

  _onPress(type) {
    switch (type) {
      case C.STATE_BEER:
        this.props.send(C.STATE_BEER);
        break;
      case C.STATE_LOVE:
        this.props.send(C.STATE_LOVE);
        break;
      case C.STATE_FOOD:
        this.props.send(C.STATE_FOOD);
        break;
      case C.STATE_COCKTAIL:
        this.props.send(C.STATE_COCKTAIL);
        break;
      case C.STATE_PUKE:
        this.props.send(C.STATE_PUKE);
        break;
      case C.STATE_SMOKE:
        this.props.send(C.STATE_SMOKE);
        break;
      default:
        return;
    }
  }

  render() {
    return (<View>
      <View style={styles.bottomView}>
        <View style={[{backgroundColor: this.props.conf.background.bottom},styles.wrapper]}>
          <TouchableOpacity onPress={this._onPress.bind(this, C.STATE_LOVE)}>
            <View style={styles.innerWrapper}>
              <Image source={require('../../../shared/assets/img/love_filled.png')} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[{backgroundColor: this.props.conf.background.bottom},styles.wrapper]}>
          <TouchableOpacity onPress={this._onPress.bind(this, C.STATE_BEER)}>
            <View style={styles.innerWrapper}>
              <Image source={require('../../../shared/assets/img/beer_filled.png')} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[{backgroundColor: this.props.conf.background.bottom},styles.wrapper]}>
          <TouchableOpacity onPress={this._onPress.bind(this, C.STATE_FOOD)}>
            <View style={styles.innerWrapper}>
              <Image source={require('../../../shared/assets/img/food_filled.png')} style={styles.image} />
            </View>
          </TouchableOpacity>
        </View>
    </View>
    <View style={styles.bottomView}>
      <View style={[{backgroundColor: this.props.conf.background.bottom},styles.wrapper]}>
        <TouchableOpacity onPress={this._onPress.bind(this, C.STATE_SMOKE)}>
          <View style={styles.innerWrapper}>
            <Image source={require('../../../shared/assets/img/smoke_filled.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[{backgroundColor: this.props.conf.background.bottom},styles.wrapper]}>
        <TouchableOpacity onPress={this._onPress.bind(this, C.STATE_PUKE)}>
          <View style={styles.innerWrapper}>
            <Image source={require('../../../shared/assets/img/puke_filled.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[{backgroundColor: this.props.conf.background.bottom},styles.wrapper]}>
        <TouchableOpacity onPress={this._onPress.bind(this, C.STATE_COCKTAIL)}>
          <View style={styles.innerWrapper}>
            <Image source={require('../../../shared/assets/img/cocktail_filled.png')} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
  </View>
</View>
    )}

}
