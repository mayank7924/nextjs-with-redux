import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import users from './users/reducer'
import counter from './counter/reducer'

const combinedReducer = combineReducers({
  counter,
  users,
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count
      },
      users: {
        users: [...new Set([...action.payload.users.users, ...state.users.users])]
      }
    }
    return nextState
  }
  else {
    return combinedReducer(state, action);
  }
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(
    applyMiddleware()
  ))
}

export const wrapper = createWrapper(initStore)
