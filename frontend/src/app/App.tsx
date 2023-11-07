import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage/ui/HomePage'
import { Suspense } from 'react'
import NavBar from '@/widgets/Navbar/ui/NavBar/NavBar'
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
      <div className="app">
        <NavBar />
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
