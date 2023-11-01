import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '@/pages/HomePage/ui/HomePage'
import { Suspense } from 'react'
import {
  ExploreLazyPage,
  LoginLazyPage,
  MessengerLazyPage,
  ProfileLazyPage,
  RegisterLazyPage,
  UserLazyPage,
} from '@/pages'

const App = () => {
  return (
    <div className="app app_light">
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginLazyPage />} />
          <Route path="/register" element={<RegisterLazyPage />} />
          <Route path="/explore" element={<ExploreLazyPage />} />
          <Route path="/messenger" element={<MessengerLazyPage />} />
          <Route path="/profile" element={<ProfileLazyPage />} />
          <Route path="/user" element={<UserLazyPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
