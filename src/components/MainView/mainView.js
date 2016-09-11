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
    switch (this.props.state.state) {
      case C.STATE_BEER:
        return {
          background: {
            top: '#EDDE5D',
            bottom: '#F09819'
          },
          topIcon: require('../../../shared/assets/img/beer.png'),
          content: {
            title: "Beer",
            text: "Oans, zwoa, g'suffa!"
          }
        };
      case C.STATE_LOVE:
        return {
          background: {
            top: '#FFB88C',
            bottom: '#DE6262'
          },
          topIcon: require('../../../shared/assets/img/love.png'),
          content: {
            title: "Love",
            text: "Good Luck!"
          }
        };
      case C.STATE_FOOD:
        return {
          background: {
            top: '#b29f94',
            bottom: '#603813'
          },
          topIcon: require('../../../shared/assets/img/food.png'),
          content: {
            title: "Food",
            text: "Enjoy your meal!"
          }
        };
      case C.STATE_COCKTAIL:
        return {
          background: {
            top: '#85D8CE',
            bottom: '#085078'
          },
          topIcon: require('../../../shared/assets/img/cocktail.png'),
          content: {
            title: "Cocktail",
            text: "Cheers!"
          }
        };
      case C.STATE_PUKE:
        return {
          background: {
            top: '#B5AC49',
            bottom: '#3CA55C'
          },
          topIcon: require('../../../shared/assets/img/puke.png'),
          content: {
            title: "Puke",
            text: "OMG!"
          }
        };
      case C.STATE_SMOKE:
      return {
        background: {
          top: '#dc2430',
          bottom: '#7b4397'
        },
        topIcon: require('../../../shared/assets/img/smoke.png'),
        content: {
          title: "Smoke",
          text: "Don't be a maybe!"
        }
      };
      default:
        return {
          background: {
            top: '#eef2f3',
            bottom: '#8e9eab'
          },
          topIcon: require('../../../shared/assets/img/osram.png'),
          content: {
            title: "Welcome",
            text: "select your current state"
          }
        };
    }
  }

  render() {
    var conf = this._getUIInformationFromState();
    console.log("CONF:" , conf);
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
          <MidText title={conf.content.title} text={conf.content.text}/>
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
  connectedDevice: state.bluetooth.connectedDevice,
  state: state.state
}))(MainView);
