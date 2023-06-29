import { createSlice } from '@reduxjs/toolkit'

export const debugMode = createSlice({
  name: 'counter',
  initialState: {
    mode: 0,
    level: 0,
  },
  reducers: {
    enable: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.mode = 1;
    },
    disable: (state) => {
      state.mode = 0;
    },
    toggle: (state) => {
      state.mode = state.mode > 0? 0 : 1
    },
    setLevel: (state, action) => {
      state.level = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { enable, disable, toggle,setLevel } = debugMode.actions

export default debugMode.reducer
