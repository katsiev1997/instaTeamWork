import { ProfileState } from '@/entities/Profile/model/types/profile'
import { UserState } from '@/entities/User/model/types/user'
import { AxiosInstance } from 'axios'
import { AuthState } from '@/features/Auth'

export interface StateSchema {
  auth: AuthState
  user: UserState
  profile: ProfileState
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
