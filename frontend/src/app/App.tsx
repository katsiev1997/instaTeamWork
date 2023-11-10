import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage/ui/HomePage'
import { Suspense } from 'react'

import { NavBar } from '@/widgets'

import {
  ExploreLazyPage,
  LoginLazyPage,
  MessengerLazyPage,
  ProfileLazyPage,
  RegisterLazyPage,
  UserLazyPage,
} from '@/pages'
import { useTranslation } from 'react-i18next'


function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('Добро пожаловать в React')}</h1>
}

const App = () => {
  return (
 
    <div className="app app_light">
      <Suspense fallback={<h1>Loading</h1>}>
        <NavBar />

        <MyComponent/>
        <div className='container'>
          <Suspense fallback={<h1>Loading</h1>}>
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
      </Suspense>

    </div>
    
  )
}

export default App
