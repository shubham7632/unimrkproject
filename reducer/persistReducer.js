import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const persistSlice = createSlice({
    name: 'persist',
    initialState:{
     token:'',
    },
    reducers: {
      saveToken(state, action) {
        state.token=action.payload
      }
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = persistSlice
  // Extract and export each action creator by name
  export const { saveToken } = actions
  // Export the reducer, either as a default or named export
  export default reducer