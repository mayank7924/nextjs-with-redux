import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      addUser: (state, action) => {
          state.users = [...state.users, action.payload]
      }
  }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer