import C from '../constants';

const bluetooth = (state = {
  state: C.NOT_CONNECTED
}, action) => {
  switch (action.type) {
  case C.STATE_BEER:
    return Object.assign({}, state, {
      state: C.STATE_BEER
    });
  default:
    return state;
  }
};

export default bluetooth;
