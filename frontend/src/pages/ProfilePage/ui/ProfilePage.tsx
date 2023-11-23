import { ProfileInfo } from '@/entities/Profile'
import React from 'react'
import cls from './ProfilePage.module.scss'
const ProfilePage = () => {
  return (
    <div className={cls.profile}>
      <ProfileInfo></ProfileInfo>
    </div>
  )
}

export default ProfilePage