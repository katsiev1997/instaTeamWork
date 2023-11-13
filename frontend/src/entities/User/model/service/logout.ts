import { ThunkConfig } from '@/app/providers'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const logout = createAsyncThunk<any, void, ThunkConfig<string>>(
  'user/getAuthUser',
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi
    try {
      const res = await extra.api.post('/logout')
      if (res.data) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN)
        window.location.href = '/'
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data.msg)
    }
  }
)
