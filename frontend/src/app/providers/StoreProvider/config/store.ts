import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { authReducer } from '@/features/Auth'
import { $api } from '@/shared/api'
import { userReducer } from '@/entities/User/model/slice/userSlice'
import { profileReducer } from '@/entities/Profile/model/slice/profileSlice'

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
  };
  
    const extraArg: ThunkExtraArg = {
      api: $api
    }
  
    const store = configureStore({
    reducer: rootReducers,
    devTools: DEV,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  })
  
  return store
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
