import { lazy } from 'react'

export const UserLazyPage = lazy(
  async () => await new Promise((res) => {
      // @ts-expect-error
      setTimeout(() => {res(import('./UserPage'))
      }, 1000)
    })
)
