import C from '../constants';

const setState = (oldState, newState) => {
  return Object.assign({}, oldState, {
    state: newState
  });
}

const state = (state = {
  state: C.NOT_CONNECTED
}, action) => {
  switch (action.type) {
  case C.STATE_BEER:
    return setState(state, C.STATE_BEER);
  case C.STATE_LOVE:
    return setState(state, C.STATE_LOVE);
  case C.STATE_FOOD:
    return setState(state, C.STATE_FOOD);
  case C.STATE_COCKTAIL:
    return setState(state, C.STATE_COCKTAIL);
  case C.STATE_PUKE:
    return setState(state, C.STATE_PUKE);
  case C.STATE_SMOKE:
    return setState(state, C.STATE_SMOKE);
  default:
    return state;
  }
};

export default state
