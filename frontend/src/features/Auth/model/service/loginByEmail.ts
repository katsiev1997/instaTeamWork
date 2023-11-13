import { User } from '@/entities/User/model/types/user'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginFormValues } from '../schema/useLoginFrom'
import { ThunkConfig } from '@/app/providers'
import { userActions } from '@/entities/User/model/slice/userSlice'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage'

interface GetFetchLoginData {
  user: User
  token: ''
}

export const loginByEmail = createAsyncThunk<
  GetFetchLoginData,
  LoginFormValues,
  ThunkConfig<string>
>('auth/login', async (userData, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi

  try {
    const res = await extra.api.post('/login', userData)
    if (res.data) {
      dispatch(userActions.setAuthData(res.data))
      localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token)
    }
  } catch (err) {
    return rejectWithValue(err.response.data.msg)
  }
})
