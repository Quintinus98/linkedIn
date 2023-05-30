import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface userState {
  entities: string[],
  status: string
}

const initialState: userState = {
  entities: [],
  status: ""
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action: PayloadAction<string>) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.entities.push(action.payload)
    },
    // userToggled(state, action) {
    //   const user = state.entities.find(user => user.id === action.payload)
    //   user.completed = !user.completed
    // },
    usersLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  }
})

export const { userAdded, usersLoading } = usersSlice.actions

export default usersSlice.reducer