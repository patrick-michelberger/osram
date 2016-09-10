import C from '../constants';

const bluetooth = (state = {
  devices: {},
  isScanning: false,
  isConnecting: false,
  connectedDevice: false
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
    let newDevice = {}
    newDevice[action.device.id] = action.device;
    return Object.assign({}, state, {
      devices: Object.assign({}, state.devices, newDevice)
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
