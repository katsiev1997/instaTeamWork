import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../types/user'
import { ThunkConfig } from '@/app/providers'
import { userActions } from '../slice/userSlice'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage'

interface GetFetchLoginData {
  user: User
  token: ''
}

export const getFetchAuthUser = createAsyncThunk<
  any,
  void,
  ThunkConfig<string>
>('user/getAuthUser', async (params, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi

  try {
    const res = await extra.api.post<GetFetchLoginData>('/refresh_token')

    if (res.data) {
        dispatch(userActions.setAuthData(res.data))
        localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token)
    }
  } catch (err) {
    return rejectWithValue(err.response.data.msg)
  }
})
