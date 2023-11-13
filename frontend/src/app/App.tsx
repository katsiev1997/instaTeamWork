import { Suspense, useEffect } from 'react'

import { NavBar } from '@/widgets'

import { useSelector } from 'react-redux'
import { getAuthToken, getFetchAuthUser } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage'
import { RouteProvider } from './providers'

const App = () => {
  const isLogged = !!useSelector(getAuthToken)
  const dispatch = useAppDispatch()

  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)

  useEffect(() => {
    if (token) {
      dispatch(getFetchAuthUser())
    }
  }, [dispatch])
  return (
    <div className="app app_light">
      <Suspense fallback={<h1>Loading</h1>}>
        {isLogged && <NavBar />}

        <div className="container">
          <RouteProvider />
        </div>
      </Suspense>
    </div>
  )
}

export default App
