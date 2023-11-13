import { StateSchema } from '@/app/providers'

export const getAuthToken = (state: StateSchema) => state.user.token || ''
