//action type
const MOUSE_OVER_TOGGLE = "mouseOver";
//action creator
export const toggleMouseOver = () => ({
  type: MOUSE_OVER_TOGGLE,
});
//initial state
const initialState = {
  mouseOver: false,
};
//reducer
export const navMenuButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOUSE_OVER_TOGGLE:
      return { ...state, mouseOver: !state.mouseOver };
    default:
      return state;
  }
};
