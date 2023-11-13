import { ThunkConfig } from '@/app/providers'
import { userActions } from '@/entities/User/model/slice/userSlice'
import { User } from '@/entities/User/model/types/user'
import { ImageUpload, imageUpload } from '@/shared/lib/imageUpload'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface UpdateProfileParams {
  user: User
  avatar: File
}

export const updateProfile = createAsyncThunk<
  any,
  UpdateProfileParams,
  ThunkConfig<string>
>('profile/updateProfile', async (params, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi
  const { user, avatar } = params

  let newAvatar: ImageUpload[] = []

  try {
    if (avatar) newAvatar = await imageUpload([avatar])

    const newUser = {
      ...user,
      avatar: avatar ? newAvatar[0].url : user.avatar,
    }
    const res = await extra.api.patch('/user', newUser)
    if (res.data) {
        dispatch(userActions.setUpdateUser(newUser))
    }
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg)
  }
})
