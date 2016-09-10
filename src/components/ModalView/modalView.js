import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import TopImage from '../TopImage/topImage';
import MidText from '../MidText/midText';
import { connect } from "../../actions/bluetooth";

export default class ModalView extends Component {

  constructor(props) {
    super(props);
  }

  _renderConnectivity() {
    if (this.props.discoveredDevice) {
          return (
              <TouchableOpacity onPress={this.props.connect} style={{flex:1, alignItems:'center', justifyContent:'center', marginBottom:80}}>
                <View style={styles.circularWrapper}>
                  <Image source={require('../../../shared/assets/img/lederhose.png')} style={{width:60, height: 60}} />
                </View>
                <Text style={[styles.instructions, styles.titles]}>
                  CONNECT
                </Text>
              </TouchableOpacity>
          );
      } else {
          return (<ActivityIndicator animating={!this.props.discoveredDevice} color='black' style={{alignItems: 'center', justifyContent: 'center', marginBottom:80, height: 80}} size="large"/>);
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[this.props.conf.background.top, this.props.conf.background.bottom]} style={styles.linearGradient}>
          <TopImage conf={this.props.conf}/>
          <MidText text={'Please connect your Lederhosen'}/>
          {this._renderConnectivity()}
        </LinearGradient>
      </View>
    )
  }

}
