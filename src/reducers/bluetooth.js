import C from '../constants';

const bluetooth = (state = {
  isScanning: false,
  isConnecting: false,
  connectedDevice: null,
  discoveredDevice: null
}, action) => {
  switch (action.type) {
  case C.START_SCAN:
    return Object.assign({}, state, {
      isScanning: true
    });
  case C.END_SCAN:
    return Object.assign({}, state, {
      isScanning: false
    });
  case C.DEVICE_FOUND:
    return Object.assign({}, state, {
      discoveredDevice: action.device
    });
  case C.CONNECT_TO_DEVICE:
    return Object.assign({}, state, {
      isConnecting: true
    });
  case C.CONNECTED_DEVICE:
    return Object.assign({}, state, {
      isConnecting: false,
      connectedDevice: action.device
    });
  default:
    return state;
  }
};

export default bluetooth;
