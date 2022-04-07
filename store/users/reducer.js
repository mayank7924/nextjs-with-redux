import { usersActionTypes } from "./action";

const usersInitialState = {
  users: ["John Doe", "Mary Jane"]
};

export default function reducer(state = usersInitialState, action) {
  switch (action.type) {
    case usersActionTypes.ADD_USER: {
        return { ...state, users: [...state.users, action.user] };
      }
    default:
      return state;
  }
}
