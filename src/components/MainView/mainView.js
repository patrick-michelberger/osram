import React, { Component } from 'react';
import C from '../../constants';
import {
  TouchableHighlight,
  Text,
  Modal,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import TopImage from '../TopImage/topImage';
import MidText from '../MidText/midText';
import BottomButtons from '../BottomButtons/bottomButtons';
import ModalView from '../ModalView/modalView';

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }

  _getUIInformationFromState() {
    switch (this.props.state) {
      case C.STATE_BEER:
        return {
          background: {
            top: '#EDDE5D',
            bottom: '#F09819'
          },
          topIcon: require('../../../shared/assets/img/beer.png')
        };
      default:
        return {
          background: {
            top: '#eef2f3',
            bottom: '#8e9eab'
          },
          topIcon: require('../../../shared/assets/img/osram.png')
        };
    }
  }

  render() {
    var conf = this._getUIInformationFromState();
    return (
      <View style={styles.container}>
        <Modal
        animationType={"slide"}
        transparent={false}
        visible={!this.props.discoveredDevice}
        onRequestClose={() => {alert("Modal has been closed.")}}>
       <ModalView {...this.props} conf={conf}/>
       </Modal>
        <LinearGradient colors={[conf.background.top, conf.background.bottom]} style={styles.linearGradient}>
          <TopImage conf={conf}/>
          <MidText title={'BEER'} text={'this is a test beer'}/>
          <BottomButtons/>
        </LinearGradient>
      </View>
    )
  }
}
