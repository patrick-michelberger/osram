import C from '../constants';
import BleManager from "react-native-ble-manager";


// var typedArray = new Uint8Array([0, 0, 0, 0, 127, 0, 0, 0, 0]);
var typedArray = new Uint8Array(setAll([0, 0, 255]));
var base64 = require('base64-js');
var testData = base64.fromByteArray(typedArray);

function setAll(color) {
  var buffer =  [];
  for (var i = 0; i < 25; i++) {
    buffer = buffer.concat(color);
  }
  return buffer;
}

const drinkBeer = (device) => {
  return (dispatch) => {
    const uuid = device.id;
    const serviceId = device.advertising.kCBAdvDataServiceUUIDs[0];
    const characteristicsId = '6E400002-B5A3-F393-E0A9-E50E24DCCA9E';
    BleManager.write(uuid, serviceId, characteristicsId, testData).then(() => {
      dispatch({
        "type": C.STATE_BEER
      });
    }).catch((error) => {
      // Failure code
      console.log(error);
    });
  };
};
