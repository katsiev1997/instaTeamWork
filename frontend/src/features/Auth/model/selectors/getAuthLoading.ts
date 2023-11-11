import { StateSchema } from '@/app/providers'

export const getAuthLoading = (state: StateSchema) =>
  state.auth.loading || false
