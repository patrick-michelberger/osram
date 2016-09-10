import React, { Component } from 'react';
import { connect } from "react-redux";
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

import { connectDevice } from '../../actions/bluetooth';
import { sendState } from '../../actions/state';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.connect = this.connect.bind(this);
    this.send = this.send.bind(this);
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
        visible={!this.props.connectedDevice}
        onRequestClose={() => {alert("Modal has been closed.")}}>
       <ModalView {...this.props} connect={this.connect} conf={conf}/>
       </Modal>
        <LinearGradient colors={[conf.background.top, conf.background.bottom]} style={styles.linearGradient}>
          <TopImage conf={conf}/>
          <MidText title={'BEER'} text={'this is a test beer'}/>
          <BottomButtons conf={conf} send={this.send} />
        </LinearGradient>
      </View>
    )
  }

  connect() {
    this.props.dispatch(connectDevice(this.props.discoveredDevice));
  }

  send(state) {
    this.props.dispatch(sendState(this.props.discoveredDevice, state));
  }
}

export default connect(state => ({
  discoveredDevice: state.bluetooth.discoveredDevice,
  connectedDevice: state.bluetooth.connectedDevice
}))(MainView);
