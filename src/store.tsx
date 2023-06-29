import { configureStore } from '@reduxjs/toolkit'
import debugModeReducer from './features/counter/debugModeSlice'

export default configureStore({
  reducer: {
    debugMode: debugModeReducer,
  },
})

