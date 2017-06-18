import ActionTypes from './actions';

const initialState = {
  greeting: 'Hello World!',
  showGreeting: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.PLUGIN_NAME_TOGGLE_GREETING: {
      return Object.assign({}, state, {
        showGreeting: !state.showGreeting
      });
    }

    default: { return state; }
  }
}