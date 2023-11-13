import { createSlice } from '@reduxjs/toolkit'
import { ProfileState } from '../types/profile'
import { searchUsers } from '../service/searchUsers'
import { getUserProfile } from '../service/getUserProfile'
import { updateProfile } from '../service/updateProfile'

const initialState: ProfileState = {
  posts: [],
  users: [],
  user: null,
  loading: false,
  success: '',
  error: '',
  searchUsers: [],
  searchLoading: false,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUser: (state, action) => {
      state.user = action.payload
    },
    setSearchUser: (state) => {
      state.searchUsers = []
    },
    setCleanMessage: (state) => {
      state.error = ''
      state.success = ''
    },
    setUpdateFollow: (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      )
    },
  },
  extraReducers(builder) {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.searchLoading = true
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.searchLoading = false
        state.searchUsers = action.payload
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.searchLoading = false
      })
      .addCase(getUserProfile.pending, (state, action) => {
        state.loading = true
      })

      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.users = [...state.users, action.payload.user]
      })

      .addCase(updateProfile.pending, (state, action) => {
        state.error = ''
        state.success = ''
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.error = ''
        state.success = 'Профиль успешно обновлен.'
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = 'Ошибка при обновления профиля'
        state.success = ''
      })
  },
})

export const profileActions = profileSlice.actions
export const profileReducer = profileSlice.reducer