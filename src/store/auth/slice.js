import { createSlice } from '@reduxjs/toolkit'
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  setTokenToLS,
} from './thunk'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.error = payload
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload
        setTokenToLS(payload.newRefreshToken, payload.newSid)
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.error = payload
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null
        localStorage.clear()
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload
      })
  },
})

export const authReducer = authSlice.reducer
