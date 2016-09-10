import C from '../constants';
import BleManager from "react-native-ble-manager";
import base64 from 'base64-js';

const getStateCode = (state) => {
  switch (state) {
    case C.STATE_BEER:
      return base64.fromByteArray(new Uint8Array([50]));
    case C.STATE_LOVE:
      return base64.fromByteArray(new Uint8Array([49]));
    case C.STATE_FOOD:
      return base64.fromByteArray(new Uint8Array([51]));
    case C.STATE_COCKTAIL:
      return base64.fromByteArray(new Uint8Array([52]));
    case C.STATE_PUKE:
      return base64.fromByteArray(new Uint8Array([53]));
    case C.STATE_SMOKE:
      return base64.fromByteArray(new Uint8Array([54]));
    default:
      return base64.fromByteArray(new Uint8Array([55]));
  }
}

export const sendState = (device, state) => {
  return (dispatch) => {
    const uuid = device.id;
    const serviceId = device.advertising.kCBAdvDataServiceUUIDs[0];
    const characteristicsId = '6E400002-B5A3-F393-E0A9-E50E24DCCA9E';
    const stateCode = getStateCode(state);
    BleManager.write(uuid, serviceId, characteristicsId, stateCode).then(() => {
      dispatch({
        "type": state,
        "stateCode": stateCode
      });
    }).catch((error) => {
      // Failure code
      console.log(error);
    });
  };
};
