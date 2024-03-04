import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api/api'

export function setTokenToLS(token, sid = '') {
  localStorage.token = token
  localStorage.sid = sid
  api.defaults.headers.authorization = `Bearer ${token}`
}

export const registerThunk = createAsyncThunk(
  'auth/signUp',
  async (body, ThunkAPI) => {
    try {
      const { data } = await api.post('auth/register', body)
      return data
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message)
    }
  }
)
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, ThunkAPI) => {
    try {
      const { data } = await api.post('auth/login', body)
      setTokenToLS(data.refreshToken, data.sid)
      return data
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message)
    }
  }
)
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (body, ThunkAPI) => {
    try {
      const { data } = await api.post('auth/refresh', body)

      return data
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message)
    }
  }
)
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (body, ThunkAPI) => {
    try {
      const { data } = await api.post('auth/logout', body)
      return data
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message)
    }
  }
)
