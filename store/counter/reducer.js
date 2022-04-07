import { counterActionTypes } from "./action";

const counterInitialState = {
  count: 0,
};

export default function reducer(state = counterInitialState, action) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
