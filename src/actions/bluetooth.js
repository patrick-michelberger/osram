import C from '../constants';
import BleManager from "react-native-ble-manager";
import { NativeAppEventEmitter } from 'react-native';

export const START_SCAN = "START_SCAN";
export const END_SCAN = "END_SCAN";
export const DEVICE_FOUND = "FOUND_DEVICE";

export const startScan = () => {
  return {
    type: C.START_SCAN
  };
};

export const endScan = () => {
  return {
    type: C.END_SCAN
  };
};

export const foundDevice = (device) => {
  return {
    type: C.DEVICE_FOUND,
    device
  };
};

export const connectToDevice = (device) => {
  return {
    type: C.CONNECT_TO_DEVICE,
    device
  };
};

export const connectedDevice = (device) => {
  return {
    type: C.CONNECTED_DEVICE,
    device
  };
};

const connect = (device) => {
  return (dispatch) => {
    dispatch(connectToDevice);
    const uuid = device.id;
    const serviceId = device.advertising.kCBAdvDataServiceUUIDs[0];
    const characteristicsId = '6E400002-B5A3-F393-E0A9-E50E24DCCA9E';
    BleManager.connect(uuid).then(() => {
      dispatch(connectedDevice(device));
    }).catch((error) => {
      // Failure code
      console.log(error);
    });
  };
};

export const listenToDevices = () => {
  return (dispatch) => {
    NativeAppEventEmitter
      .addListener('BleManagerDiscoverPeripheral', (data) => {
        if (data.id == "F510216B-DA50-05C7-748B-8F120981A43D") {
            dispatch(foundDevice(data));
        }
      });
  }
}

export const scanDevices = ()  => {
  return (dispatch) => {
    BleManager.scan([], 30, true)
         .then((results) => { 
           dispatch(startScan());
         });
  };
};
