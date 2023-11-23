import { StateSchema } from "@/app/providers";



export const getProfileUser = (state: StateSchema) => state.profile.user || null