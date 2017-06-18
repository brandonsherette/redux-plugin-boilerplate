const ActionTypes = {
  PLUGIN_NAME_TOGGLE_GREETING: 'PLUGIN_NAME_TOGGLE_GREETING'
};

export default ActionTypes;

// Export Action Creators
export const toggleGreeting = () => {
  return { type: ActionTypes.PLUGIN_NAME_TOGGLE_GREETING }
};