import { ThunkConfig } from '@/app/providers'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const registerByEmail = createAsyncThunk<any, any, ThunkConfig>(
  'auth/register',
  async (userData, thunkApi) => {
    // const { getState, rejectWithValue, dispatch, extra } = thunkApi
    try {
      const res = await axios.post(
        'http://localhost:5000/api/register',
        userData
      )
      console.log(res)
    } catch (err: any) {
      console.log(err.response.data.message)
    }
  }
)
