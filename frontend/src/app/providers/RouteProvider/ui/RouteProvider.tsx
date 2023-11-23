import { Suspense } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import HomePage from '@/pages/HomePage/ui/HomePage'
import { Spinner } from '@/shared/ui'
import {
  ExploreLazyPage,
  LoginLazyPage,
  MessengerLazyPage,
  ProfileLazyPage,
  RegisterLazyPage,
  UserLazyPage,
} from '@/pages'
import AppLayout from './AppLayout'
import AuthLayout  from './AuthLayout'

const RouteProvider = () => {
  return (
    <>
      {' '}
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<LoginLazyPage />} />
            <Route path="/register" element={<RegisterLazyPage />} />
          </Route>
          <Route path="/explore" element={<ExploreLazyPage />} />
          <Route path="/messenger" element={<MessengerLazyPage />} />
          <Route path="/profile/:id" element={<ProfileLazyPage />} />
          <Route path="/user" element={<UserLazyPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default RouteProvider
